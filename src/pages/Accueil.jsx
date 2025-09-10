
const Accueil = () => {
    return(
        <div>
            {/*EXPLICATION SITE*/}
            <main class="container my-5">
            <div class="text-center mb-5 ">
                <h2 class="fw-bold">Comment trouver mon artisan ?</h2>
                <p class="text-muted">Nous allons maintenant voir comment trouver son artisan en seulement 4 étapes simples et intuitives.</p>
            </div>

            <div class="steps text-center">
                <p><span class="fw-bold text-primary">1- Choisir la catégorie d'artisanat dans le menu.</span><br>
                Il suffira ici de choisir une des 4 catégories afin d'accéder aux artisans qui répondront à vos attentes.</p>

                <p><span class="fw-bold text-primary">2- Choisir un artisan.</span><br>
                Une liste complète d'artisans sera mise à votre disposition. Il ne vous restera plus qu'à sélectionner celui qui répondra le mieux à vos besoins afin d'accéder à sa page et à plus de détails le concernant.</p>

                <p><span class="fw-bold text-primary">3- Le contacter via le formulaire de contact</span><br>
                Une fois sur la page de votre artisan, un formulaire de contact sera mis à votre disposition afin de pouvoir échanger avec lui et lui exposer vos besoins/attentes.</p>

                <p><span class="fw-bold text-primary">4- Une réponse sera apportée sous 48H</span><br>
                Dernière étape, la plus simple et aussi la plus compliquée, l'attente ! Heureusement nous vous assurons une réponse sous environ 48H afin de pouvoir vous organiser et planifier vos besoins.</p>
            </div>

            <hr class="my-5 w-50 m-auto">

            {/*ARTISANS DU MOIS*/}
            <div class="text-center">
                <h3 class="fw-bold mb-5 justify-content-between">Les Artisans du Mois !</h3>
            </div>
                <div class="row g-4 m-auto">
                    <div class="col-12 col-md-6 col-lg-4">
                    <div class="card artisan-card shadow-sm p-3 mb-5 bg-white rounded">
                        <div class="card-body text-center">
                        <h5 class="card-title fw-bold">Au pain chaud</h5>
                        <hr class="my-3 w-50 m-auto">
                        <p class="mb-1">Boulanger</p>
                        <p class="text-muted"><i class="bi bi-geo-alt"></i> Montélimar</p>
                        <p class="text-primary fs-5">★★★★★</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                    <div class="card artisan-card shadow-sm p-3 mb-5 bg-white rounded">
                        <div class="card-body text-center">
                        <h5 class="card-title fw-bold">Orville Salmons</h5>
                        <hr class="my-3 w-50 m-auto">
                        <p class="mb-1">Chauffagiste</p>
                        <p class="text-muted"><i class="bi bi-geo-alt"></i> Evian</p>
                        <p class="text-primary fs-5">★★★★★</p>
                        </div>
                    </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                    <div class="card artisan-card shadow-sm p-3 mb-5 bg-white rounded">
                        <div class="card-body text-center">
                        <h5 class="card-title fw-bold">Chocolaterie Labbé</h5>
                        <hr class="my-3 w-50 m-auto">
                        <p class="mb-1">Chocolatier</p>
                        <p class="text-muted"><i class="bi bi-geo-alt"></i> Lyon</p>
                        <p class="text-primary fs-5">★★★★★</p>
                        </div>
                    </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Accueil;