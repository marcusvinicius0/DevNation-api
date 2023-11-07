import * as Yup from "yup";
import { UserProps } from "../@types/user";
import { CorsOptions } from "cors";

export const userValidationSchema = Yup.object().shape({
  id: Yup.string().required(),
  email: Yup.string().email().required(),
  name: Yup.string().min(4).max(100).required(),
  nickname: Yup.string().min(4).max(50).required(),
  post: Yup.string().max(150).required(),
  password: Yup.string().min(8).max(100).required(),
  presentation: Yup.string().min(50).max(5000).notRequired(),
  isVerified: Yup.boolean().required().default(false),
  banner: Yup.string().notRequired(),
  avatar: Yup.string().notRequired(),
  location: Yup.string().notRequired(),
  linkedinURL: Yup.string().url().notRequired(),
  githubURL: Yup.string().url().notRequired(),
  defaultURL: Yup.string().url().notRequired(),
  xp: Yup.number().default(50).required(),
  isBanned: Yup.boolean().required().default(false),
  role: Yup.string().required(),
})

export const removeKeyAccessFromJson = (data: UserProps) => {
  const filteredJson: UserProps[] = Object.values(data).map((item: UserProps) => {
    delete item.password;

    return item;
  })

  return filteredJson;
}

const allowedOrigins = ["http://localhost:3001"];
const methods = ["GET", "POST", "PUT"];

export const options: CorsOptions = {
  origin: allowedOrigins,
  methods: methods,
};