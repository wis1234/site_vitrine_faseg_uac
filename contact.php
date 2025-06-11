<?php
include 'includes/head.php';
include 'header.php';

$name = $email = $subject = $message = "";
$nameErr = $emailErr = $subjectErr = $messageErr = "";
$successMsg = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate name
    if (empty(trim($_POST["name"]))) {
        $nameErr = "Le nom est requis.";
    } else {
        $name = htmlspecialchars(trim($_POST["name"]));
    }

    // Validate email
    if (empty(trim($_POST["email"]))) {
        $emailErr = "L'email est requis.";
    } elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Format d'email invalide.";
    } else {
        $email = htmlspecialchars(trim($_POST["email"]));
    }

    // Validate subject
    if (empty(trim($_POST["subject"]))) {
        $subjectErr = "Le sujet est requis.";
    } else {
        $subject = htmlspecialchars(trim($_POST["subject"]));
    }

    // Validate message
    if (empty(trim($_POST["message"]))) {
        $messageErr = "Le message est requis.";
    } else {
        $message = htmlspecialchars(trim($_POST["message"]));
    }

    // If no errors, simulate sending email
    if (empty($nameErr) && empty($emailErr) && empty($subjectErr) && empty($messageErr)) {
        // Here you would normally send the email using mail() or other method
        // For simulation, just set success message
        $successMsg = "Merci, votre message a été envoyé avec succès.";
        // Clear form fields
        $name = $email = $subject = $message = "";
    }
}
?>

<main>
  <section class="container" style="padding: 3rem 2rem;">
    <h2>Contactez-nous</h2>

    <?php if ($successMsg): ?>
      <div style="color: var(--success); background: rgba(40, 167, 69, 0.1); padding: 1rem; border-radius: 5px; margin-bottom: 1rem;">
        <?= $successMsg ?>
      </div>
    <?php endif; ?>

    <form method="post" action="contact.php" novalidate>
      <div class="form-group">
        <label for="name">Nom complet</label>
        <input type="text" id="name" name="name" value="<?= htmlspecialchars($name) ?>" required>
        <span style="color: #dc3545; font-size: 0.9rem;"><?= $nameErr ?></span>
      </div>
      <div class="form-group">
        <label for="email">Adresse email</label>
        <input type="email" id="email" name="email" value="<?= htmlspecialchars($email) ?>" required>
        <span style="color: #dc3545; font-size: 0.9rem;"><?= $emailErr ?></span>
      </div>
      <div class="form-group">
        <label for="subject">Sujet</label>
        <select id="subject" name="subject" required>
          <option value="">Sélectionnez un sujet</option>
          <option value="admission" <?= ($subject == "admission") ? "selected" : "" ?>>Renseignements sur les admissions</option>
          <option value="program" <?= ($subject == "program") ? "selected" : "" ?>>Questions sur les programmes</option>
          <option value="other" <?= ($subject == "other") ? "selected" : "" ?>>Autre demande</option>
        </select>
        <span style="color: #dc3545; font-size: 0.9rem;"><?= $subjectErr ?></span>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required><?= htmlspecialchars($message) ?></textarea>
        <span style="color: #dc3545; font-size: 0.9rem;"><?= $messageErr ?></span>
      </div>
      <button type="submit">
        <i class="fas fa-paper-plane"></i> Envoyer
      </button>
    </form>
  </section>
</main>

<?php
include 'footer.php';
?>
