import { SiteLayout } from "../../components/site-layout";

export default function SportPage() {
  return (
    <SiteLayout
      current="hobby"
      currentHobby="sport"
      title="Il Mio Percorso Sportivo"
      eyebrow="Hobby"
      subtitle="Sport - Francavilla Andrea"
    >
      <div className="row g-4">
        <div className="col-12 col-md-6 col-xl-4">
          <div className="card bg-body-tertiary h-100 floating-card sport-card">
            <img src="/assets/img/tennis.jpg" className="card-img-top sport-photo" alt="Tennis" />
            <div className="card-body">
              <h2 className="h4">Tennis</h2>
              <p className="mb-0">
                Il tennis è uno sport che ho iniziato a praticare recentemente ma che mi sta appassionando molto: mi
                sta insegnando l&apos;importanza della concentrazione, della strategia e del controllo mentale.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <div className="card bg-body-tertiary h-100 floating-card sport-card">
            <img src="/assets/img/Piscina fossano.jpg" className="card-img-top sport-photo" alt="Nuoto" />
            <div className="card-body">
              <h2 className="h4">Nuoto</h2>
              <p className="mb-0">
                Il nuoto è stata la mia prima vera passione sportiva. È uno sport completo che coinvolge tutti i
                muscoli del corpo e mi aiuta a rilassarmi mentalmente dopo una giornata intensa.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-xl-4">
          <div className="card bg-body-tertiary h-100 floating-card sport-card">
            <img src="/assets/img/palestra.jpg" className="card-img-top sport-photo" alt="Palestra" />
            <div className="card-body">
              <h2 className="h4">Palestra</h2>
              <p className="mb-0">
                Attualmente, la palestra è diventata una parte fondamentale della mia vita. Mi dedico al fitness
                generale, seguendo una routine di allenamento che include sia esercizi di forza che di resistenza.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-body-tertiary mt-4">
        <div className="card-body">
          <h2 className="h4 mb-3">Routine Settimanale</h2>
          <ul className="mb-0">
            <li className="mb-2">
              <i className="bi bi-calendar2-check me-2 text-danger"></i>Tennis: 1 volta a settimana
            </li>
            <li className="mb-2">
              <i className="bi bi-calendar2-check me-2 text-danger"></i>Nuoto: 1 volta a settimana
            </li>
            <li className="mb-2">
              <i className="bi bi-calendar2-check me-2 text-danger"></i>Palestra: 3 volte a settimana
            </li>
            <li>
              <i className="bi bi-heart-pulse me-2 text-danger"></i>Alimentazione controllata per supportare
              l&apos;attività fisica
            </li>
          </ul>
        </div>
      </div>
    </SiteLayout>
  );
}
