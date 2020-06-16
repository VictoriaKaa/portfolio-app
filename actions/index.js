import axios from 'axios'
import Cookies from 'js-cookie'

import { getCookieFromReq } from '../helpers/utils'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/api/v1',
    timeout: 3000
})

const setAuthHeader = (req) => {
    const token = req ? getCookieFromReq(req, 'jwt') : Cookies.getJSON('jwt');

    if(token) {
        return { headers: {'authorization': `Bearer ${token}`} } 
    }
    return undefined
}
const rejectPromise = (resError) => {
    let error = {}

    if (resError && resError.response && resError.response.data) {
        error = resError.response.data
    } else {
        error = resError
    }
    return Promise.reject(error)
}

export const createBlog = (blogData) => {
    return axiosInstance.post(`/blogs`, blogData, setAuthHeader())
        .then(response => response.data)
        .catch(error => rejectPromise(error))
}

export const getUserBlogs = async (req) => {
    return await axiosInstance.get('/blogs/me', setAuthHeader(req)).then(response => response.data)
}

export const getBlogs = async () => {
    return await axiosInstance.get('/blogs').then(response => response.data)
}

export const getBlogBySlug = async (slug) => {
    return await axiosInstance.get(`/blogs/s/${slug}`).then(response => response.data)
}

export const getBlogById = (id) => {
    return axiosInstance.get(`/blogs/${id}`).then(response => response.data)
}

export const updateBlog = (blogData, blogId) => {
    return axiosInstance.patch(`/blogs/${blogId}`, blogData, setAuthHeader())
        .then(response => response.data)
        .catch(error => rejectPromise(error))
}

export const deleteBlog = (blogId) => {
    return axiosInstance.delete(`/blogs/${blogId}`, setAuthHeader())
        .then(response => response.data)
        .catch(error => rejectPromise(error))
}