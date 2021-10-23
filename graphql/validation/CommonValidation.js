import * as Yup from 'yup';

const FILE_SIZE = 160 * 100 * 1024;
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
];

export const ValidateSingleImageSchema = Yup.object().shape({
    image:Yup.mixed()
        .required("Required")
        .test(
          "fileSize",
          "File too large",
          value => value && value.size <= FILE_SIZE
        )
        .test(
          "fileFormat",
          "Unsupported Format",
          value => value && SUPPORTED_FORMATS.includes(value.type)
        ) 
})
