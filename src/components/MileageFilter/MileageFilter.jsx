import css from "./MileageFilter.module.css";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const MileageSchema = Yup.object().shape({
  from: Yup.number().min(0).max(100000).positive().integer(),
  to: Yup.number().min(0).max(500000).positive().integer(),
});

function MileageFilter() {
  const fromFieldId = useId();
  const toFieldId = useId();

  const initialValues = {
    from: "",
    to: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={MileageSchema}
    >
      <Form className={css.container}>
        <label className={css.label}>Price/ 1 hour</label>
        <div className={css.inputsContainer}>
          <div className={css.minInput}>
            <p htmlFor={fromFieldId}>From</p>
            <Field
              type="number"
              name="from"
              id="fromFieldId"
              className={css.input}
            />
          </div>
          <div className={css.maxInput}>
            <p htmlFor={toFieldId}>To</p>
            <Field
              type="number"
              name="to"
              id="toFieldId"
              className={css.input}
            />
          </div>
        </div>
      </Form>
    </Formik>
  );
}

export default MileageFilter;
