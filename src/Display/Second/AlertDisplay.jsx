import { Alert, AlertTitle, AlertMessage, AlertDescription } from "./Alert";
import styles from "./alertRender.module.css"; // ✅ Corrected this line

export default function AlertDisplay() {
  return (
    <>
      <Alert type="success">
        <AlertTitle>
          <h3 className={styles.successText}>Success</h3>
        </AlertTitle>
        <AlertMessage>
          <span className={styles.congratsText}>Congratulations!</span>
        </AlertMessage>
        <AlertDescription>
          <p className={styles.alertDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </AlertDescription>
      </Alert>

      <Alert type="warning">
        <AlertTitle>
          <h3 className={styles.warningText}>Warning</h3>
        </AlertTitle>
        <AlertMessage>
          <span className={styles.attentionLetter}>Attention!</span>
        </AlertMessage>
        <AlertDescription>
          <p className={styles.warningDescription}>
            Be cautious about the changes you made.
          </p>
        </AlertDescription>
      </Alert>

      <Alert type="error">
        <AlertTitle>
          <h3 className={styles.errorText}>Error</h3>
        </AlertTitle>
        <AlertMessage>
          <span className={styles.errorLetter}>
            There is a problem with your application
          </span>
        </AlertMessage>
        <AlertDescription>
          <p className={styles.errorDescription}>
            Please check the logs for more details.
          </p>
        </AlertDescription>
      </Alert>

      <Alert type="info">
        <AlertTitle>
          <h3 className={styles.neutralText}>Neutral</h3>
        </AlertTitle>
        <AlertMessage>
          <span className={styles.neutralMessage}>Update available</span>
        </AlertMessage>
        <AlertDescription>
          <p className={styles.neutralDescription}>
            A new version of the application is available.
          </p>
        </AlertDescription>
      </Alert>
    </>
  );
}
