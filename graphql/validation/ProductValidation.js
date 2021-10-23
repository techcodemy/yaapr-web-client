import * as Yup from 'yup';

const FILE_SIZE = 160 * 100 * 1024;
const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png"
];

export const ValidateImagesSchema = Yup.object().shape({
    images:Yup.array().of(
        Yup.mixed()
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
        ),
    ), 
})


export const ValidatePropertySchema = Yup.object().shape({
    category: Yup.string()
    .required('Required'),
    description:Yup.string().required('Required'),
    condition:Yup.string().required('Required'),
    images:Yup.array().of(
        Yup.mixed()
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
        ),
    ), 
    price:Yup.number().positive('price cannot be less than zero').integer('price cannot be less than zero').required('Required'),
    stock:Yup.number().positive('stock cannot be less than zero').integer('stock cannot be less than zero').required('Required'),
    currency:Yup.string().required('Required'),
    uploaded_by:Yup.string().required('Required'),
    published_now:Yup.boolean().required('Required'), 
})


export const ValidateUpdatePropertySchema = Yup.object().shape({
    category: Yup.string().required('Required'),
    description:Yup.string().required('Required'),
    condition:Yup.string().required('Required'),
    price:Yup.number().positive('price cannot be less than zero').integer('price cannot be less than zero').required('Required'),
    stock:Yup.number().integer('stock cannot be less than zero'),
    currency:Yup.string().required('Required'),
    discount:Yup.number(),
})

/* 
currency:Yup.object({
    name:Yup.string().required('Required'),
    symbol:Yup.string().required('Required'),
}), */

/* 
uploadedCompanyId:Yup.mixed().when('uploadedBy',{is:(val) => val === 'company',
    then:Yup.string().required('Required'),
    otherwise:Yup.mixed().notRequired(),
}), */