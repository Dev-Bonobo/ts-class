// use of zod inference : 
// rather than creating a interface or type inside the front-end code we use zod infrence 
// to reuse the declared variable present in back-end code 

// and syntax would be like : type SignupParams = z.infer<typeof signupInput>;

// then we learn how to upload our own modules over npm and all stuff
// also while pushing we neglect ts files 
// so it is needed to use declaration files so that mentioned types would not be waste i.e. name.d.ts files 
// so to generate it just include "declaration" : "true" in package.json 
