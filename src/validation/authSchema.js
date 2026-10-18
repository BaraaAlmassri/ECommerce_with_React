import * as yup from 'yup'
export const registerSchema = yup.object({
    fullName:yup.string().required("Full Name is required").min(3, "Full Name must have 3 chars at least"),
    userName: yup.string().required("User Name is Required")
        .min(3,"User Name must have at least 3 Chars"),
        email:yup.string().required("Email is Required").email("Invalid Email Format"),
        password:yup.string().required("Password is Required").min(6,"Password must have at least 6 chars")
        .matches(/[A-Z]/ , "Password must contains uppercase letter")
        .matches(/[a-z]/ , "Password must contains lowercase letter")
        .matches(/[0-9]/ , "Password must contains number")
        .matches(/[!@#$%^&*(),.?":{}|<>_\-+=]/, "Password must contain a special character"),
         phoneNumber:yup.string().required("Phone Number is Required")
            .matches(/^05\d{8}/ , "Phone Number must start with 05 & must be 10 digits"),
})

export const loginSchema = yup.object({
     email:yup.string().required("Email is Required").email("Invalid Email Format"),
        password:yup.string().required("Password is Required").min(6,"Password must have at least 6 chars")
        .matches(/[A-Z]/ , "Password must contains uppercase letter")
        .matches(/[a-z]/ , "Password must contains lowercase letter")
        .matches(/[0-9]/ , "Password must contains number")
        .matches(/[!@#$%^&*(),.?":{}|<>_\-+=]/, "Password must contain a special character"),
})

export const codeSchema = yup.object({
     email:yup.string().required("Email is Required").email("Invalid Email Format")
})

export const resetSchema = yup.object({
      code:yup.string().required("Code is required check your email please").min(4,"The code must have 4 digits at least"),
      email:yup.string().required("Email is Required").email("Invalid Email Format"),
        password:yup.string().required("Password is Required").min(6,"Password must have at least 6 chars")
        .matches(/[A-Z]/ , "Password must contains uppercase letter")
        .matches(/[a-z]/ , "Password must contains lowercase letter")
        .matches(/[0-9]/ , "Password must contains number")
        .matches(/[!@#$%^&*(),.?":{}|<>_\-+=]/, "Password must contain a special character")

})