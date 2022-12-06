import React from 'react';

const Blog = () => {
    return (
        <div className='blog-page'>
            <div className='border rounded mb-2 bg-dark p-2'>
                <p className='text-primary text-center'>1. What is cors?</p>
                <p className='text-warning text-center'>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>

                
            </div>

            <div className='border rounded mb-2 bg-dark p-2'>
                <p className='text-primary text-center'>2. Why are you using firebase? What other options do you have to implement authentication?</p>
                <p className='text-warning text-center'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>

                <p className='text-warning text-center'>Other option are: STYTCH,Ory,Supabase,Okta,PingIdentity,</p>
            </div>

            <div className='border rounded mb-2 bg-dark p-2'>
                <p className='text-primary text-center'>3. How does the private route work?</p>
                <p className='text-warning text-center'>PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.
                </p>
                
            </div>

            <div className='border rounded mb-2 bg-dark p-2'>
                <p className='text-primary text-center'>4. What is Node? How does Node work?</p>
                <p className='text-warning text-center'>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node
                </p>
                <p className='text-warning text-center'>Node provides access to several important global objects for use with Node program files. When writing a file that will run in a Node environment, these variables will be accessible in the global scope of your file.module is an object referring to the functionality that will be exported from a file. In Node, each file is treated as a module.require() is a function used to import modules from other files or Node packages.process is an object referencing to the actual computer process running a Node program and allows for access to command-line arguments and much more.
                </p>
                
            </div>
        </div>
    );
};

export default Blog;