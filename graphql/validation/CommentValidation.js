import * as Yup from 'yup';

export const CommentSchema = Yup.object().shape({
    comment: Yup.string()
      .min(1, 'comment is too short!').max(300,'comment is too long!'),
});