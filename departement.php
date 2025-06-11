<?php
include 'includes/head.php';
include 'header.php';
?>

<main class="landing-page">
    <section class="container">
        <h1 class="fade-in">Nos Départements</h1>
        
        <div class="intro-text fade-in delay-1">
            <p>Les départements ainsi définis ci-après sont organisés en mentions du « Domaine Sciences Economiques et de Gestion » au sens du LMD-CAMES. Un processus de restructuration des départements est actuellement en cours.</p>
        </div>
        
        <div class="mentions-container">
            <!-- Mention Sciences Economiques -->
            <div class="mention-card fade-in delay-1">
                <div class="mention-header">
                    Département Sciences Économiques 
                </div>
                <div class="departments-list">
                    <div class="department-item">
                        <div class="department-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div class="department-info">
                            <h3>Techniques Quantitatives et Outils d'Aide à la Décision (TQOAD)</h3>
                            <p>Formation en méthodes quantitatives appliquées à l'économie et à la gestion</p>
                        </div>
                    </div>
                    
                    <div class="department-item">
                        <div class="department-icon">
                            <i class="fas fa-landmark"></i>
                        </div>
                        <div class="department-info">
                            <h3>Politiques Économiques et Sectorielles (PES)</h3>
                            <p>Analyse des politiques publiques et des dynamiques sectorielles</p>
                        </div>
                    </div>
                    
                    <div class="department-item">
                        <div class="department-icon">
                            <i class="fas fa-globe-africa"></i>
                        </div>
                        <div class="department-info">
                            <h3>Financement du Développement et Relations Économiques Internationales (FDREI)</h3>
                            <p>Étude des mécanismes de financement et des relations économiques internationales</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Mention Sciences de Gestion -->
            <div class="mention-card fade-in delay-2">
                <div class="mention-header">
                    Département des Sciences de Gestion 
                </div>
                <div class="departments-list">
                    <div class="department-item">
                        <div class="department-icon">
                            <i class="fas fa-coins"></i>
                        </div>
                        <div class="department-info">
                            <h3>Finance, Comptabilité et Contrôle (FCC)</h3>
                            <p>Formation en gestion financière, comptabilité et contrôle de gestion</p>
                        </div>
                    </div>
                    
                    <div class="department-item">
                        <div class="department-icon">
                            <i class="fas fa-bullseye"></i>
                        </div>
                        <div class="department-info">
                            <h3>Marketing, Innovation et Entrepreneuriat (MIE)</h3>
                            <p>Stratégies marketing, innovation et création d'entreprise</p>
                        </div>
                    </div>
                    
                    <div class="department-item">
                        <div class="department-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <div class="department-info">
                            <h3>Gestion des Ressources Humaines et Développement des Organisations (GRHDO)</h3>
                            <p>Management des RH et transformation organisationnelle</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="note-box fade-in delay-2">
            <p><strong>Note :</strong> Ces départements entreront en vigueur dès leur validation par les autorités compétentes de l'Université d'Abomey-Calavi.</p>
        </div>
    </section>
</main>

<script>
    // Animation au scroll
    document.addEventListener('DOMContentLoaded', function() {
        // Observer pour les animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, {
            threshold: 0.1
        });
        
        // Éléments à observer
        const elements = document.querySelectorAll('.mention-card, .intro-text, .note-box');
        elements.forEach(el => {
            observer.observe(el);
            // Retirer d'abord les classes d'animation pour les réappliquer
            el.classList.remove('fade-in', 'delay-1', 'delay-2');
        });
        
        // Effet de survol amélioré pour les départements
        const departmentItems = document.querySelectorAll('.department-item');
        departmentItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.boxShadow = '';
            });
        });
    });
    
    // Animation pour le titre
    window.addEventListener('load', function() {
        const title = document.querySelector('h1');
        title.style.animation = 'fadeIn 1s ease-in';
        
        // Ajout d'un effet de vague pour les icônes
        const icons = document.querySelectorAll('.department-icon');
        icons.forEach((icon, index) => {
            icon.style.animation = `fadeIn 0.5s ease-in ${index * 0.1}s both`;
        });
    });
</script>

<?php
include 'footer.php';
?>
