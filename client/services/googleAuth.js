// let googleAuth;

// const loadGapi = () => {
//   if (gapi !== undefined) {
//     console.log("Loading google auth");
//     gapi.load("auth2", () => {
//       googleAuth = gapi.auth2.init({
//         client_id:
//           "826534736820-k7jqg08gks5lfb45is8s43jcqa03v3dv.apps.googleusercontent.com",
//         cookiepolicy: "single_host_origin"
//       });
//     });
//   }
// };

// window.addEventListener("load", loadGapi, false);

// const attachSignin = (element, getUserCallBack) => {
//   if (!googleAuth) {
//     setTimeout(() => attachSignin(element, getUserCallBack), 200);
//     return;
//   }

//   console.log("Attaching google ref...");
//   googleAuth.attachClickHandler(element, {}, user => {
//     let profile = user.getBasicProfile(),
//       userProfile = {
//         name: profile.getName(),
//         email: profile.getEmail(),
//         avatar: profile.getImageUrl()
//       };

//     getUserCallBack(userProfile);
//   });
// };

// export default attachSignin;
