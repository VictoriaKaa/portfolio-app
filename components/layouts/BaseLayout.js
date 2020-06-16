import Header from "../shared/Header"
import React from "react";
import Head from "next/head"

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props
  const headerType = props.headerType || 'default'
  const title = props.title || 'Victoria Klimova'
    return (
      <>
      <Head>
      <title>{title}</title>
      <meta name="description" content="My name is Victoria Klimova, I am frontend developer" />
      <meta name="keywords" content="klimova portfolio, klimova developer"/>

      <meta property="og:title" content="Victoria Klimova - programmer, developer" />
      <meta property="og:locale" content="be_BY"  />
      <meta property="og:url" content={`${process.env.BASE_URL}`} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="My name is Victoria Klimova, I am frontend developer" />
      <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo&display=swap" rel="stylesheet" />
      
      <link rel="icon" type="image/ico" href="/static/favicon.ico" />
      </Head>
        <div className="layout-container" >
          <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user} isSiteOwner={isSiteOwner} />
          <main className={`cover ${className}`}>
            <div className="wrapper">
              {children}
            </div>
          </main>
        </div>
      </>
    )
  }

export default BaseLayout;
