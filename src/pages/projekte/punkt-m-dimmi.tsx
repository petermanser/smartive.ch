import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Contact } from '../../components/contact';
import { ImageCard } from '../../components/image-card';
import { Keyfigure } from '../../components/keyfigure';
import { Testimonial } from '../../components/testimonial';
import { Grid } from '../../compositions/grid';
import { PageHeader } from '../../compositions/page-header';
import { PageSection } from '../../compositions/page-section';
import { UnorderedList } from '../../compositions/unordered-list';
import { Employee } from '../../data/employees';
import Employees from '../../data/employees.json';
import { Quote } from '../../data/quotes';
import Quotes from '../../data/quotes.json';
import { Teaser } from '../../data/teaser';
import Teasers from '../../data/teasers.json';
import { Copy } from '../../identity/copy';
import { Heading3 } from '../../identity/heading-3';
import { Page } from '../../layouts/page';
import { BlobVariations } from '../../utils/blob-variations';
import { getRandomTeasers } from '../../utils/teasers';

type Props = {
  quote: Quote;
  contact: Employee;
  teasers: Teaser[];
};

const Dimmi: NextPage<Props> = ({ quote, contact, teasers }) => (
  <Page>
    <PageHeader
      markdownTitle="Ein _Social Network_ für die interne Kommunikation."
      description=" Für den Migros-Genossenschafts-Bund, den grössten Schweizer Detailhändler, haben wir ein internes soziales Netzwerk umgesetzt. 100 000 Mitarbeitende können Gruppen erstellen und gemeinsame Interessen teilen. Die Unternehmen und Abteilungen des Migros-Genossenschafts-Bundes kommunizieren Gruppenspezifisch interne News. So rücken die Mitarbeitenden über das gesamte Unternehmen hinweg näher zusammen."
    >
      <Copy>
        Für den Migros-Genossenschafts-Bund, den grössten Schweizer Detailhändler, haben wir ein internes soziales Netzwerk
        umgesetzt. 100 000 Mitarbeitende können Gruppen erstellen und gemeinsame Interessen teilen. Die Unternehmen und
        Abteilungen des Migros-Genossenschafts-Bundes kommunizieren Gruppenspezifisch interne News. So rücken die
        Mitarbeitenden über das gesamte Unternehmen hinweg näher zusammen.
      </Copy>
    </PageHeader>

    <main>
      <PageSection>
        <Grid cols={2}>
          <Image
            className="rounded bg-mint-200"
            src="/images/projekte/dimmi/jowa-stgaller-brot-mitarbeitende-header.jpg"
            alt="Mitarbeiterin von Jowa zeigt ein Brot"
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
          <Image
            className="rounded bg-mint-200"
            src="/images/projekte/dimmi/melectronics-beratung-staubsauger-0.jpg"
            alt="melectronics bei der Beratung zum Staubsaugerkauf"
            priority
            objectFit="cover"
            width={720}
            height={383}
          />
        </Grid>
      </PageSection>
      <PageSection>
        <Keyfigure
          image={<Image src="/images/projekte/dimmi/smartive-phone.png" height="566" width="275" objectFit="contain" />}
        >
          <UnorderedList
            title="Was bringts"
            items={[
              'Social Network für über 100ʼ000 Benutzer aus über 50 unterschiedlichen Unternehmen',
              'Verfügbar im Web, sowie als iOS und Android App',
              'Code-Sharing zwischen React und React Native',
              'Hohe Performance dank Optimistic Updates und Elasticsearch',
              'Automatisierte Deployments auf alle Zielplattformen',
            ]}
            markerColor="apricot"
          />
        </Keyfigure>
      </PageSection>
      <PageSection title="Agiles Vorgehen führt zum Erfolg">
        <Copy>... oder: Wie baut man ein Soziales Netzwerk in einem halben Jahr?</Copy>
        <Copy>
          Mittels iterativer Projektumsetzung wurden die Anforderungen in testbare und auf sich aufbauende Teilpakete
          gegliedert. Sehr komplexe Themen wie Gruppenmitgliedschaften, Berechtigungen oder Benachrichtigungen wurden weiter
          aufgeteilt und gemäss Priorisierung umgesetzt. Dieses agile Vorgehen stellte sicher, dass die Kundin jederzeit den
          Fortschritt der Arbeiten mitverfolgen konnte. Durch gezielte Aktivierung und Darstellung pro Unternehmen ist eine
          phasenweise Live-Schaltung möglich.
        </Copy>
      </PageSection>
      <PageSection>
        <Image
          className="rounded bg-mint-200"
          src="/images/projekte/dimmi/midor-mitarbeiterin-im-schutzanzug-haelt-guetzli.png"
          alt="Midor Mitarbeiterin im Schutzanzug hält Guetzli"
          priority
          objectFit="cover"
          width={1504}
          height={800}
        />
      </PageSection>
      <PageSection>
        <Grid cols={2}>
          <div>
            <Heading3>iOS, Android und Web App mit gemeinsamer Code-Basis</Heading3>
            <Copy>
              Die Web-Version wurde mit React, die iOS und Android App mit React Native umgesetzt. Der Frontend-Code für User
              Interface (UI) und Business Logik ist klar getrennt: Das UI wurde für Apps und Web-Version separat erstellt.
              Die Business Logik wiederum kann dank React von allen Plattformen verwendet werden. 35% des Codes wird
              plattformübergreifend genutzt. Weniger Code ist günstiger, sowohl beim Entwickeln, als auch beim Testen und
              Warten.
            </Copy>
          </div>
          <div>
            <Heading3>Optimistic Updates im Frontend, Elasticsearch im Backend</Heading3>
            <Copy>
              100 000 Mitarbeitende sollen schnell und einfach miteinander kommunizieren können. Eine hohe Performance ist
              dabei zentral. Beim Ausliefern der Daten über die API verwenden wir daher Elasticsearch. Die durchschnittliche
              Antwortzeit liegt bei weniger als 0.3 Sekunden. Beim Erstellen oder Ändern von Kommentaren, Beiträgen oder
              Gruppen setzen wir konsequent auf sogenannte Optimistic Updates: Ein Kommentar wird damit beispielsweise nach
              dem Speichern im User Interface sichtbar, ohne Feedback vom Server, ob der Kommentar bereits gespeichert wurde.
              Die gefühlte Performance wird damit so schnell, dass man von der Client-Server-Kommunikation kaum mehr etwas
              merkt.
            </Copy>
          </div>
        </Grid>
      </PageSection>
      <PageSection>
        <Testimonial background="mint" blobs={BlobVariations.mint[2]} quote={quote} />
      </PageSection>
      <PageSection>
        <Heading3>Automatisierte Releases und Deployments</Heading3>
        <Copy>
          Seit längerem setzen wir auf automatisierte Releases und Deployments. Um diese Vorteile innerhalb der gesamten
          Entwicklungsumgebung zu nutzen, haben wir unsere Deployments auch für Apps komplett automatisiert. Innert Minuten
          nach einem neuen Release stehen die Apps auf iOS und Android zum Testen bereit. Dies garantiert schnellere
          Iterationen und eine hohe Qualität in der App-Entwicklung und verhindert manuelle Fehler beim deployen.
        </Copy>
      </PageSection>
      <PageSection>
        <Contact contact={contact} />
      </PageSection>
      <PageSection title="Weitere Erfolgsgeschichten">
        <Grid cols={3}>
          {teasers.map((teaser) => (
            <ImageCard key={teaser.title} {...teaser} />
          ))}
        </Grid>
      </PageSection>
    </main>
  </Page>
);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      teasers: getRandomTeasers(3, Teasers.dimmi.title),
      contact: Employees.robert,
      quote: Quotes['danijela-dimmi'],
    },
  };
};

export default Dimmi;
