import React from "react";

const Blog = () => {
  return (
    <div className=" px-2 lg:px-10 mt-5">
      <h2 className="text-amber-600 text-2xl font-bold">1.what is cors?</h2>
      <p className="text-white">
        Ans:Cross-Origin Resource Sharing (CORS) is an HTTP-header based
        mechanism that allows a server to indicate any origins (domain, scheme,
        or port) other than its own from which a browser should permit loading
        resources. CORS also relies on a mechanism by which browsers make a
        "preflight" request to the server hosting the cross-origin resource, in
        order to check that the server will permit the actual request.{" "}
      </p>
      <h2 className="text-amber-600 text-2xl font-bold">
        2. Why are you using firebase? What other options do you have to
        implement authentication?
      </h2>
      <p className="text-white">
        Ans: Firebase provides detailed documentation and cross-platform SDKs to
        help me build an apps on Android, iOS, the web, C++, and Unity
      </p>
      <p className="text-white">
        Usually, authentication by a server entails the use of a user name and
        password. Other ways to authenticate can be through cards, retina scans,
        voice recognition, and fingerprints
      </p>
      <h2 className="text-amber-600 text-2xl font-bold">
        3.How does the private route work?
      </h2>
      <p className="text-white">
        The react private route component renders child componentsif the user is
        logged in. If not logged in the user is redirected to the /login page
        with the return url passed in the location state property. The current
        logged in user is retrieved from Redux state with a call to the
        useSelector() hook. Redux is used in this example however it is not
        required to implement a Private Route component in React Router 6. You
        could use a different state management library or any approach you
        prefer to get the logged in status of the user.
      </p>
      <h2 className="text-amber-600 text-2xl font-bold">
        4. What is Node? How does Node work?
      </h2>
      <p className="text-white">
        Node allows developers to write JavaScript code that runs directly in a
        computer process itself instead of in a browser. Node can, therefore, be
        used to write server-side applications with access to the operating
        system, file system, and everything else required to build
        fully-functional applications.
      </p>
      <p className="text-white">
        It is a used as backend service where javascript works on the
        server-side of the application. This way javascript is used on both
        frontend and backend. Node. js runs on chrome v8 engine which converts
        javascript code into machine code, it is highly scalable, lightweight,
        fast, and data-intensive.
      </p>
    </div>
  );
};

export default Blog;
