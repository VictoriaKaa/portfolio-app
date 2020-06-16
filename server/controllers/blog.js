const AsyncLock = require('async-lock');
const slugify = require('slugify')
const lock = new AsyncLock();

const Blog = require('../models/blog')

exports.getBlogs = (req, res) => {
  Blog.find({status: 'published'})
      .sort({'createdAt': -1})
      .exec((err, blogs) => {
            if(err) {
              return res.status(422).send(err)
            }
            return res.json(blogs)
    })
  }


exports.getUserBlogs = (req, res) => {
  const userId = req.user.sub;

  Blog.find({userId}, (err, userBlogs) => {
            if(err) {
              return res.status(422).send(err)
            }
            return res.json(userBlogs)
    })
  }
  exports.getBlogBySlag = (req, res) => {
    const slug = req.params.slug;
    Blog.findOne({slug}, (err, foundBlog) => {
        if (err) {
          return res.status(422).send(err)
        }
        return res.json(foundBlog)
      })
  }

exports.getBlogById = (req, res) => {
  const blogId = req.params.id;
  Blog.findById(blogId, (err, foundBlog) => {
      if (err) {
        return res.status(422).send(err)
      }
      return res.json(foundBlog)
    })
}

exports.createBlog = (req, res) => {
        const blogData = req.body;
        const blog = new Blog(blogData);
        if(req.user) {
            blog.userId = req.user.sub;
            blog.author = req.user.name;
        }
        blog.save((err, createdBlog) => {
          if(err) {
            return res.status(422).send(err)
          }
          return res.json(createdBlog)
        })
  }

exports.updateBlog = (req, res) => {
    const blogId = req.params.id
    const blogData = req.body

    Blog.findById(blogId, (err, foundBlog) => {
      if(err) {
        return res.status(422).send(err)
      }

      foundBlog.set(blogData)

      if (blogData.status && blogData.status === "published" && !foundBlog.slug) {
        foundBlog.slug = slugify(foundBlog.title, {
          replacement: '-',  // replace spaces with replacement character, defaults to `-`
          remove: undefined, // remove characters that match regex, defaults to `undefined`
          lower: false,      // convert to lower case, defaults to `false`
          // strict: false,     // strip special characters except replacement, defaults to `false`
        })
      }

      foundBlog.updateAt = new Date()
      foundBlog.save((err, savedBlog) => {
        if(err) {
          return res.status(422).send(err)
        }
        return res.json(savedBlog)
      })
    })
  }

exports.deleteBlog= (req, res) => {
    const blogId = req.params.id

    Blog.deleteOne({_id: blogId}, (err) => {
      if(err) {
        return res.status(422).send(err)
      }
      return res.json({status: 'DELETED'})
    })
  }