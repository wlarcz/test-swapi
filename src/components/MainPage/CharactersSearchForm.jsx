import { Formik, Form, Field } from 'formik';

const сharactersSearchFormValidate = values => {
    const errors = {};
    return errors;
  }

const CharactersSearchForm = (props) => {

  const submit = (values, { setSubmitting }) => {
    props.onFilterChanged(values);
    setSubmitting(false);
    debugger
  }

  return <div>

    <Formik
      initialValues={{ term: '' }}
      validate={сharactersSearchFormValidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="next" name="term" />
          <button type="submit" disabled={isSubmitting}>
            Найти персонажа
           </button>
        </Form>
      )}
    </Formik>

  </div>
}

export default CharactersSearchForm;