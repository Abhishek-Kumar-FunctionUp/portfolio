import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import style from "./Contact.module.css";

const ContactForm = ({ isVisible }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: "",
    type: "",
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: "", type: "" });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destructure data object
    const { name, email, subject, message } = data;

    // Hardcoded values for testing (replace with your actual values)
    const SERVICE_ID = "service_f3oalqk";
    const TEMPLATE_ID = "template_fyl752n";
    const USER_ID = "p8Nl8yPGUAxmtQ-3v";

    try {
      // Disable form while processing submission
      setDisabled(true);

      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Abhishek Kumar",
        subject: subject,
        message: message,
        reply_to: email,
      };

      console.log("Sending email with params:", templateParams);

      // Initialize EmailJS
      emailjs.init(USER_ID);

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      console.log("EmailJS Success:", result);
      toggleAlert(
        "Message sent successfully! Thank you for contacting me.",
        "success"
      );
    } catch (e) {
      console.error("EmailJS Error:", e);

      let errorMessage =
        "Something went wrong. Please try again or contact me directly.";

      if (e.status === 400) {
        errorMessage = "Bad Request - Please check the form data.";
      } else if (e.status === 401) {
        errorMessage = "Unauthorized - Email service authentication failed.";
      } else if (e.status === 404) {
        errorMessage = "Not Found - Email service configuration issue.";
      } else if (e.text && e.text.includes("Public Key")) {
        errorMessage = "Invalid Public Key - Please contact the administrator.";
      }

      toggleAlert(errorMessage, "danger");
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <div
      className={`${style.contactForm} ${isVisible ? style.animateForm : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className={style.basicDetail}>
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="name"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Please enter your name",
                        },
                        maxLength: {
                          value: 30,
                          message: "Please use 30 characters or less",
                        },
                      })}
                      className={style.input}
                      placeholder="Name"
                    ></input>
                    {errors.name && (
                      <span className={style.errorMessage}>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className={style.inputContainer}>
                    <input
                      type="email"
                      name="email"
                      {...register("email", {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className={style.input}
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span className={style.errorMessage}>
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="row formRow">
                  <div className={style.inputContainer}>
                    <input
                      type="text"
                      name="subject"
                      {...register("subject", {
                        required: {
                          value: true,
                          message: "Please enter a subject",
                        },
                        maxLength: {
                          value: 75,
                          message: "Subject cannot exceed 75 characters",
                        },
                      })}
                      className={style.subject}
                      placeholder="Subject"
                    ></input>
                    {errors.subject && (
                      <span className={style.errorMessage}>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className={style.inputContainer}>
                    <textarea
                      rows={3}
                      name="message"
                      {...register("message", {
                        required: true,
                      })}
                      className={style.message}
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span className={style.errorMessage}>
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
                <button className={style.btn} type="submit" disabled={disabled}>
                  {disabled ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role="alert"
        >
          {alertInfo.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() =>
              setAlertInfo({ display: false, message: "", type: "" })
            }
          ></button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
