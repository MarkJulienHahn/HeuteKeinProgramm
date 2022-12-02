import { useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";

import image02 from "../public/images/Schnitt.png";
import image04 from "../public/images/layer_01.png";
import image03 from "../public/images/layer_02.png";
import image05 from "../public/images/layer_03.png";
import image06 from "../public/images/layer_04.png";
import image08 from "../public/images/schild.gif";
import image09 from "../public/images/tribuene.jpg";
import image10 from "../public/images/PublicArtMuenchen.png";
import image11 from "../public/images/layer_06.png";
import image12 from "../public/images/layer_07.png";
import image13 from "../public/images/blinken.gif";
import image14 from "../public/images/tafeln.jpg";
import image15 from "../public/images/poster.png";
import image16 from "../public/images/tribuene-mobile.jpg";
import image17 from "../public/images/heute kein-12.jpg";
import image18 from "../public/images/heute kein-69.jpg";
import image19 from "../public/images/Bildschirmfoto 2022-10-08 um 21.42.04.png";
import image20 from "../public/images/Heute kein programm.jpg";
import image21 from "../public/images/heute kein-13.jpg";
import image22 from "../public/images/heute kein-71.jpg";

const Screen01 = () => {
  const [scrollPos, setScrollPos] = useState(0);

  const [projects, toggleProjects] = useState(false);
  const [credits, toggleCredits] = useState(false);

  const handleScroll = (event) => {
    setScrollPos(event.currentTarget.scrollTop);
  };

  useEffect(() => {
    scrollPos < 8700 ? (toggleProjects(false), toggleCredits(false)) : () => {};
  });

  console.log(scrollPos);

  return (
    <>
      <div className="scrollWrapper" onScroll={handleScroll}>
        <div className="scrollInner">
          <div
            className={
              scrollPos < 100 ? "scrollFixed hidden" : "scrollFixed visible"
            }
            style={scrollPos > 1000 ? { opacity: "0" } : { opacity: "1" }}
          >
            <div className="headerImage">
              <Image src={image22}></Image>
            </div>
          </div>
          <div
            className={
              scrollPos < 2100
                ? "scrollContent center"
                : "scrollContent topLeft"
            }
            style={scrollPos > 3000 ? { opacity: "0" } : { opacity: "1" }}
          >
            <h1>
              program <br />
              no program
            </h1>
          </div>
        </div>

        <div
          className={
            scrollPos < 1100 || scrollPos > 2000
              ? "scrollFixed hidden"
              : "scrollFixed visible"
          }
        >
          <p>
            Fanti Baum & Sebastian Klawiter, <br /> 2022
          </p>
        </div>

        <div
          className={
            scrollPos < 2100 || scrollPos > 3100
              ? "scrollFixed hidden"
              : "scrollFixed visible"
          }
        >
          <p>
            Haupttribüne der Olympia-Regattaanlage, Oberschleißheim, <br />
            Architekten- und Ingenieurgemeinschaft Eberl und Partner
          </p>
          <div className="Schnitt">
            <Image src={image02} />
          </div>
        </div>

        <div
          className={
            scrollPos < 3100 || scrollPos > 4100
              ? "scrollFixed hidden"
              : "scrollFixed visible"
          }
        >
          <div></div>
          <p>
            Peter Mell & Hans Poppel & Uwe Streifeneder,
            <br />
            Siebdruck, 1972
          </p>
        </div>

        <div
          className={
            scrollPos < 3100 || scrollPos > 5100
              ? "background top hidden"
              : "background visible"
          }
          style={{ zIndex: "1000" }}
        >
          <div>
            <Image src={image03} />
          </div>
        </div>

        <div
          className={
            scrollPos < 3100 ? "background hidden" : "background visible"
          }
        >
          <div>
            <Image src={image04} />
          </div>
        </div>

        <div
          className={
            scrollPos < 4100 || scrollPos > 5100
              ? "background hidden"
              : "background visible"
          }
        >
          <p className={"creditsBG"}>
            Aufsicht Olympiadorf München <br />
            Architekturbüro heinlewischer
          </p>
        </div>

        <div
          className={
            scrollPos < 5100 || scrollPos > 6100
              ? "background hidden"
              : "background visible multiply"
          }
          style={{ mixBlendMode: "multiply" }}
        >
          <div>
            <Image src={image05} />
          </div>
        </div>

        <div
          className={
            scrollPos < 7100 || scrollPos > 8100
              ? "background hidden"
              : "background visible"
          }
        >
          <p className={"creditsBG"}>
            Fanti Baum & Sebastian Klawiter, <br /> 2022
          </p>
        </div>

        <div
          className={
            scrollPos < 6100 || scrollPos > 7100
              ? "background hidden"
              : "background visible multiply"
          }
          style={{ mixBlendMode: "multiply" }}
        >
          <div>
            <Image src={image11} />
          </div>
        </div>

        <div
          className={
            scrollPos < 7100 || scrollPos > 9500
              ? "background hidden"
              : "background visible multiply"
          }
          style={{ mixBlendMode: "multiply" }}
        >
          <div>
            <Image src={image12} />
          </div>
        </div>

        <div
          className={
            scrollPos < 8100 || scrollPos > 9500
              ? "background hidden"
              : "background visible"
          }
        >
          <div>
            <Image src={image06} />
          </div>
        </div>

        <div
          className={
            scrollPos < 9000 ? "background outBottom" : "background in"
          }
        >
          <div className="info">
            <div>
              <p onClick={() => toggleProjects(!projects)}>
                {projects || credits ? "" : "Project"}
              </p>
            </div>
            <div>
              <p onClick={() => toggleCredits(!credits)}>
                {projects || credits ? "" : "Credits"}
              </p>
            </div>
          </div>

          <div
            className={projects ? "projects visible" : "projects hidden"}
            onClick={() => toggleProjects(!projects)}
          >
            <p>
              program no program
              <br /> <br />
              5/9/72 – No programme today <br /> <br />
              The day marks a radical interruption. The attack on the Israeli
              team represented an abrupt caesura in the Olympic games. At the
              moment of the hardly believable event, the artists Peter Mell,
              Hans Poppel and Uwe Streifeneder made a screen print, which was to
              be the last sign of the cultural programme being held for the
              first time – no programme today – 5/9/72.
            </p>

            <div className="imageWideWrapper imageDesktop">
              <Image src={image17} placeholder={"blur"} />
              <p>Photo: Fanti Baum & Sebastian Klawiter</p>
            </div>

            <div className="imageWideWrapper imageMobile">
              <Image src={image16} />
              <p>Photo: Fanti Baum & Sebastian Klawiter</p>
            </div>

            <p>
              Fanti Baum & Sebastian Klawiter recall precisely this sentence
              fifty years later. In the spirit of Gertrude Stein, Baum &
              Klawiter are not so much concerned with the repetition itself, but
              rather more with insistence – insisting that the suspension
              stretches right through until today.
              <br /> <br />
              In this sense, the moment of stopped time is at the centre of the
              art project by Fanti Baum & Sebastian Klawiter. The short sentence
              is to be installed in glowing letters on the roof of the stand
              along the canoe and rowing regatta section and thus want to
              provide space for the radical interruption. This is because, for
              them, the self-suspending sentence refers to an empty space and an
              open wound. It perhaps awakes memories – holding fast thoughts of
              an event that shook the world. As a suspended monument – (monere:
              remember, request, warn, refer to) – the sentence speaks of an
              almost forgotten Olympia site just as much as the spectacle
              machine of sport. Those passing by are invited to stay for a
              long-lasting, extended moment in remembrance of the happenings and
              victims of the attack in 1972.
            </p>
            <div className="imageWideWrapper">
              <div className="embedContainer">
                <iframe
                  src="https://player.vimeo.com/video/777305853?autoplay=1&muted=1&loop=1"
                  frameborder={"0"}
                ></iframe>
              </div>
            </div>
            {/* <div className="imageSmallWrapper">
              <Image src={image13} />
              <p>Photo: Ben Quatflieg</p>
            </div> */}
            <p>
              The lettering &quot;5.9.72, no program today&quot; contrasts with Avery
              Brundage's famous phrase &quot;The Games Must Go On,&quot; with which he
              continued the Olympic Games on 6.9.72, one day after the Olympic
              Massacre in Munich. Not until the 2021 Olympics in Tokyo will
              there be a minute's silence for the victims of the 1972 attack for
              the first time, something the bereaved families have fought 49
              years for.
              <br /> <br />
              Ankie Spitzer, spokeswoman for the bereaved families, accused the
              Federal Republic of Germany of grave mistakes in a conversation
              with Matthias Friebe on &quot;Deutschlandfunk&quot; on Aug. 28, 2022,
              because their demands have gone unheard for 50 years: <br />
              <br />
              »I want to make it clear. We asked for three things:
              <br /> <br />
              1) was a public apology and they taken off responsibility for all
              that went wrong during the massacre in Munich. […]
              <br /> <br />
              2) the opening of all the archives because for tens of years they
              did not want to open it, there are still a lot of information. I
              just got – two month ago – I got 540 new documents that I never
              saw. That was supposed to be close till 2047 – 25 years from now!
              – I will be dead and gone. […]
              <br /> <br />
              3) The third request was, to make sure we would – at the 50th
              anniversary – finally get a just compensation because until now we
              never got a compensation. […] – according to international law.«
            </p>
            <div className="imageWideWrapper">
              <Image src={image18} />
              <p>Photo: Fanti Baum & Sebastian Klawiter</p>
            </div>

            <p>
              On Sept. 5, 2022, 50 years after the attack at Munich Olympics,
              President Frank-Walter Steinmeier of Germany asks the victims’
              families for forgiveness — for the lack of protection for the
              Israeli athletes at the Olympic Games in Munich and for the lack
              of clarification afterwards. At the same time, he assures the
              relatives of this. They had waited decades to hear Germany
              acknowledging its failure during the Olympic Massacre in Munich.
              <br /> <br />
              דוד ברגר David Berger
              <br />
              Anton Fliegerbauer <br />
              פרידמן ז Ze‘ev Friedman <br />
              יוסף גוטפרוינד Yossef Gutfreund <br />
              אליעזר חלפין Eliezer Halfin <br />
              יוסף רומנו Yossef Romano <br />
              עמיוצר שפירא Amitzur Shapira <br />
              קהת שור Kehat Shorr <br />
              מרק סלבין Mark Slavin <br />
              אנדרי שפי צר Andrei Spitzer <br />
              יעקב שפרינגר Yakov Springer <br />
              משה (מוני) ויינברג Moshe (Muni) Weinberg <br /> <br /> <br />
              <br />
            </p>

            <div className="imageSmallWrapper">
              <Image src={image19} />
              <p>Photo: Fanti Baum & Sebastian Klawiter</p>
            </div>

            <p>
              program no program
              <br /> <br />
              5.9.72, heute kein Programm <br /> <br />
              Der Tag markiert eine radikale Unterbrechung. Das Attentat auf das
              Team der israelischen Mannschaft stellte eine jähe Zäsur der
              Olympischen Spiele dar. Im Moment des kaum zu fassenden
              Ereignisses machten die Künstler Peter Mell, Hans Poppel und Uwe
              Streifeneder einen Siebdruck, der das letzte Zeichen des erstmals
              stattfindenden Kulturprogramms Spielstraße sein sollte – heute
              kein Programm, 5.9.72.
            </p>

            <div className="imageWideWrapper imageDesktop">
              <Image src={image09} />
              <p>Photo: Ben Quatflieg</p>
            </div>

            <div className="imageWideWrapper imageMobile">
              <Image src={image16} />
              <p>Photo: Fanti Baum & Sebastian Klawiter</p>
            </div>

            <p>
              Genau diesen Satz rufen fünfzig Jahre später Fanti Baum &
              Sebastian Klawiter wieder auf. Ganz im Sinne Gertrude Steins geht
              es Baum & Klawiter in dieser Wiederholung nicht um die
              Wiederholung an sich, sondern vielmehr um ein Insistieren – ein
              Insistieren, dass dieses Ereignis bis ins Heute reicht.
            </p>
            <div className="imageSmallWrapper">
              <Image src={image20} />
              <p>Photo: Fanti Baum & Sebastian Klawiter</p>
            </div>
            <p>
              In diesem Sinne steht das Moment der angehaltenen Zeit im Zentrum
              des Kunstprojekts von Fanti Baum & Sebastian Klawiter. In
              leuchtenden Lettern bringen sie den Schriftzug am Dach der Tribüne
              der Kanu- und Ruderregattastrecke an und wollen so der radikalen
              Unterbrechung Platz einräumen. Denn der sich selbst aussetzende
              Satz verweist für Sie auf eine Leerstelle und offene Wunde, und
              vermag vielleicht die Erinnerung wach ­–, das Denken in der
              Schwebe zu halten, über ein Ereignis, das die Welt erschüttert
              hat. Als ausgesetztes Monument – (monere: erinnern, auffordern,
              warnen, verweisen auf) – spricht der Satz von einem der fast
              vergessenen Olympiaorte genauso zur Spektakelmaschine des Sports
              wie es die Vorbeikommenden dazu einlädt – auffordert, für einen
              langanhaltenden, ausgedehnten Moment in Gedanken bei den
              Ereignissen und Opfern des Attentats von 1972 zu bleiben. Mehr
              noch: die Hinterbliebenen zu hören.
              <br /> <br />
            </p>
            <p>
              Hintergrund: <br /> <br />
              Der Schriftzug heute kein Programm, 5.9.72 steht auch im Gegensatz
              zu dem berühmt gewordenen Satz The Games Must Go On von Avery
              Brundage, mit dem er am 6.9.72 die Olympischen Spiele einen Tag
              nach dem Olympia-Attentat fortsetzte. Erst bei den Olympischen
              Spielen in Tokio 2021 gibt es erstmals eine Gedenkminute für die
              Opfer des Attentats von 1972. Dafür haben die Hinterbliebenen 49
              Jahre gekämpft.
              <br /> <br />
              Ankie Spitzer, Sprecherin der Hinterbliebenen, warf der
              Bundesrepublik Deutschland am 28.08.2022 im Sportgespräch mit
              Matthias Friebe im Deutschlandfunk schwere schwere Fehler vor,
              weil ihre Forderungen 50 Jahre ungehört geblieben sind:
              <br /> <br />
              „Wir haben um drei Dinge gebeten“:
              <br /> <br />
              1. „Eine öffentliche Entschuldigung und die Übernahme der
              Verantwortung für alles, was während des Attentats in München
              schiefgelaufen ist. […]“
              <br /> <br />
              2. „Die Öffnung aller Archive, weil die jahrzehntelang nicht
              zugänglich waren. Es gibt noch viele Informationen. Ich habe erst
              vor zwei Monaten 540 neue Dokumente bekommen, die ich noch nie
              gesehen habe und die angeblich bis 2047 unter Verschluss bleiben
              sollten. Das wäre in 25 Jahren. Da werde ich tot sein. […]
              <br /> <br />
              3. Unsere dritte Forderung: Dass wir zum 50-järigen Jubiläum
              endlich eine Entschädigung bekommen […] – nach internationalem
              Recht.
            </p>
            <div className="imageSmallWrapper">
              <Image src={image21} />
              <p>Photo: Fanti Baum & Sebastian Klawiter</p>
            </div>
            <p>
              Am 5.9.2022, dem Tag des 50-jährigen Gedenkens an das
              Olympia-Attentat, bittet der Bundespräsident Frank-Walter
              Steinmeier die Angehörigen der Opfer um Vergebung – für den
              mangelnden Schutz der israelischen Athleten bei den Olympischen
              Spielen 1972 in München und für die mangelnde Aufklärung danach.
              Diese sichert er den Angehörigen zugleich zu.
            </p>

            <p>
              <br /> <br />
              דוד ברגר David Berger
              <br />
              Anton Fliegerbauer <br />
              פרידמן ז Ze‘ev Friedman <br />
              יוסף גוטפרוינד Yossef Gutfreund <br />
              אליעזר חלפין Eliezer Halfin <br />
              יוסף רומנו Yossef Romano <br />
              עמיוצר שפירא Amitzur Shapira <br />
              קהת שור Kehat Shorr <br />
              מרק סלבין Mark Slavin <br />
              אנדרי שפי צר Andrei Spitzer <br />
              יעקב שפרינגר Yakov Springer <br />
              משה (מוני) ויינברג Moshe (Muni) Weinberg <br /> <br /> <br />
              <br />
            </p>
          </div>

          <div
            className={credits ? "credits visible" : "credits hidden"}
            onClick={() => toggleCredits(!credits)}
          >
            <p>
              program no program is an art project by Fanti Baum & Sebastian
              Klawiter.
              <br />
              <br />
              It is at show from <br />
              August — December 2022
              <br />
              Olympic canoe and rowing regatta section, Munich
              <br />
              <br />
              <br />
              <br />
              Original Screen Print 1972: Heute kein Programm, 5.9.72 by Peter
              Mell, Hans Poppel und Uwe Streifeneder
              <br />
              Idea, Concept, Installation 2022: Fanti Baum & Sebastian Klawiter
              <br />
              Technical Realisation: Neon Liberda GmbH <br />
              <br />
              Special thanks to: Peter Mell
              <br />
              Thanks to: Florian Krey, Kerstin Möller, Daniel Bürkner, Klaus
              Weisenbach
              <br />
              <br />
              program no program is an art project in the “Starting signals”
              series, funded by
              <br />
              <a
                href="https://publicartmuenchen.de"
                target="_blank"
                rel="noreferrer"
              >
                www.publicartmuenchen.de
              </a>
              <br />
              <br />
              <br />
              <br />
              Fanti Baum & Sebastian Klawiter work at the intersection of
              architecture, art and public space. They realize site-specific
              architectures, installations, performances and collective
              processes. In 2020/2021 they were artistic fellows at the Akademie
              Schloss Solitude. In addition, they have been teaching
              architecture, urban planning, stage design and performance in
              theory and practice at various art colleges and universities since
              2015.
              <br />
              <br />
              Website designed by Fanti Baum,{" "}
              <a
                href="https://sebastianklawiter.de"
                target="_blank"
                rel="noreferrer"
              >
                Sebastian Klawiter
              </a>{" "}
              &{" "}
              <a
                href="https://markjulienhahn.de"
                target="_blank"
                rel="noreferrer"
              >
                Mark&nbsp;Julien&nbsp;Hahn
              </a>
              <br />
              Website developed by{" "}
              <a
                href="https://markjulienhahn.de"
                target="_blank"
                rel="noreferrer"
              >
                Mark&nbsp;Julien&nbsp;Hahn
              </a>
              <br />
              <br />
            </p>
            <span className="logo">
              <Image src={image10} />
            </span>
            <p>
              <Link href="/policy" target="_blank">
                <a target="_blank">Impressum/Datenschutz</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen01;
