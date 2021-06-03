import { Formik, Form, Field } from 'formik';
import styles from './CharactersSearchForm.module.css';

const сharactersSearchFormValidate = values => {
    const errors = {};
    return errors;
  }

const CharactersSearchForm = (props) => {

  const submit = (values, { setSubmitting }) => {
    props.onFilterChanged(values);
    setSubmitting(false);
  }

  return <div className={styles.inputForm}>

    <Formik 
      initialValues={{ term: '' }}
      validate={сharactersSearchFormValidate}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="term" placeholder='Найти персонажа'/>
          <button type="submit" disabled={isSubmitting}>
            Поиск
           </button>
        </Form>
      )}
    </Formik>

  </div>
}

export default CharactersSearchForm;