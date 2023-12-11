document.addEventListener('DOMContentLoaded', function () {
    let langToggle = document.querySelector('.lang-toggle');
    let currentLanguage = 'en';

    langToggle.addEventListener('click', function () {
        currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
        langToggle.querySelectorAll('img').forEach((ele) => {
            ele.classList.toggle('hidden');
        });
        changeLanguage(currentLanguage);
    });

    i18next.init({
        lng: 'en',
        resources: {
            en: {
                translation: {
                    process: 'Process',
                    startups: 'Our Startups',
                    code4equity: 'Code4Equity',
                    services: 'Our Services',
                    faqLink: 'FAQ',
                    companyDescription: 'Vis-a-Vis Ventures is a company builder for digital business models',
                    mainHeading: 'Design. <br />Development. <br />',
                    getStarted: 'Get started with us in no time',
                    featuresHeading: 'Features',
                    design: {
                        duration: '3-4 days | Figma design',
                        title: 'Design',
                        description:
                            'After our initial meeting and the assignment, we will create a complete one together with you Design of our product in figma',
                    },
                    developProduct: {
                        duration: '4-8 weeks | First version',
                        title: 'Develop Product',
                        description:
                            "We don't think much of MVPs or the like, since the experience gained cannot usually be implemented 1:1 in the actual end product. With a large team, we are therefore implementing our joint project directly in a finished first version.",
                    },
                    maintenance: {
                        duration: 'Monthly | Continuous growth',
                        title: 'Ree Maintenance And Further Development For The First Year',
                        description:
                            'With our team of marketing and sales specialists as well as financing experts, we support the growth and further development of our startup. Over 100 supervised projects speak for themselves. At a cost of less than a full-time developer - including new features every month with our developers.',
                    },
                    testimonialsSectionTitle: 'What our customers say about solutions',
                    testimonialsHeading: 'Testimonials',
                    testimonial1: {
                        name: 'Max, Snow Resort Tycoon',
                        content:
                            'Working with the Visavis Ventures team was highly professional at all times. In addition to development, the team also supported us in marketing and financing our truly extensive project.',
                    },
                    testimonial2: {
                        name: 'Mustafa, Food Delivery App',
                        content:
                            'I was impressed by the ease of use, the inactive marketing option and the 24/7 availability of the team. I would advise any of my colleagues to work with Visavis-Ventures.',
                    },
                    testimonial3: {
                        name: 'Morgan, Hornycorn',
                        content:
                            'It was a pleasure to work with the Visavis-Ventures Team. The delivered graphics were really fantastic.',
                    },
                    turningIdeasText: 'Turning Ideas into Reality Together.',
                    sayHelloTo: 'Say hello to',
                    realCTO: {
                        heading: 'Real CTO',
                        description: 'A CTO who pitches with you in front of investors.',
                    },
                    realCoFounder: {
                        heading: 'Real CoFounder',
                        description: 'A CoFounder who works with you on the joint startup.',
                    },
                    teamOfDevelopers: {
                        heading: 'Team of Developers',
                        description: 'A team of developers who bring your product live.',
                    },
                    code4EquityIntro: 'Innovative Code4Equity Empowers Startup Success',
                    code4EquityHeading: 'Code4Equity',
                    code4EquityParagraph1:
                        'Empowering startups beyond traditional agency work through our innovative Code4Equity program.',
                    code4EquityParagraph2: 'What does that mean exactly?',
                    code4EquityParagraph3:
                        "Imagine this: Someone like Moritz dreams of a TikTok-like app but faces funding challenges. We step in, crafting Moritz's app for a modest 4-digit fee and a 7-15% stake in his venture.",
                    code4EquityParagraph4:
                        'Our commitment extends beyond development. We offer ongoing support, expertise in financing and marketing, ensuring the joint project flourishes.',
                    code4EquityParagraph5:
                        "While we often exit after the first or second round of financing, we're open to staying on as a valued agency partner.",
                    customSolutions: {
                        intro: 'Innovative Development Solutions for Growth.',
                        heading: 'Custom Solutions',
                        appDevelopment: {
                            title: 'App Development',
                            cost: '3.5 - 7k € +',
                            shares: 'shares',
                            description1: 'Validate your product by getting paying customers.',
                            description2: 'A website and process that can solve your problem for your customers.',
                            duration: '2 Weeks',
                        },
                        webDevelopment: {
                            title: 'Web Development',
                            cost: '3.5 - 7k € +',
                            shares: 'shares',
                            description1: 'Specification and design for your market entry product.',
                            description2:
                                'Clickable mockup, clear roadmap, and reliable numbers for you and investors.',
                            duration: '2 Weeks',
                        },
                        gameDevelopment: {
                            title: 'Game Development',
                            cost: '5 - 15k €',
                            shares: 'without shares',
                            description1: 'Launch your product to gain scalable customers.',
                            description2: 'A fully functioning app or web app so you can scalably serve customers.',
                            duration: '10 Weeks',
                        },
                        eCommerce: {
                            title: 'eCommerce',
                            cost: 'On request',
                            shares: '',
                            description1: 'Maintain and grow Product Market Fit.',
                            description2: 'More customers and a better conversion funnel with each customer feedback.',
                            duration: 'Continuous',
                        },
                    },
                    additionalServices: {
                        intro: 'Additional Services',
                        description:
                            "Explore our tailored solutions, and let's create a partnership that drives success.",
                        heading: "Don't Give Up Shares?",
                        card1: {
                            title: 'Financing',
                            description1: 'Receive funding for innovative business ideas',
                            description2: 'Research about elegible programs, preparation, application and pitching',
                            duration1: 'Together',
                            duration2: '4 Weeks',
                        },
                        card2: {
                            title: 'Distribution',
                            description1: 'Save time and money through clear focus and reach your goals twice as fast',
                            description2:
                                'Individual coaching with seiral entrepreneurs in Tech, Sales, Marketing etc.',
                            duration1: 'Continuous',
                        },
                        card3: {
                            title: 'E-Marketing',
                            description1: 'Ensure code quality and get clear next steps',
                            description2: 'Report and clear recommendations that will save you months of work',
                            duration1: '2 Weeks',
                        },
                        card4: {
                            title: 'Marketing',
                            description1: 'Regain speed for your startup',
                            description2: 'Understanding of your own codebase, clear roadmap and numbers',
                            duration1: '4 Weeks',
                        },
                    },
                    startUp: {
                        intro: 'Additional Services',
                        description:
                            "Explore our tailored solutions, and let's create a partnership that drives success.",
                        heading: 'Own Startups',
                    },
                    faq: {
                        intro: 'FAQ',
                        description:
                            "Explore our tailored solutions, and let's create a partnership that drives success.",
                        heading: "Don't Give Up Shares?",
                        q1: 'Does the code belong to me?',
                        ans1: `After full payment, and if the Code4Equity offer has been used, after the
                                            transfer of the shares, the code is of course yours and will be sent to you
                                            via Github or similar services.`,
                        q2: 'How do you receive your payment?',
                        ans2: `In most cases we work with payments in milestones. A subdivision after
                                            sending the design is common, as well as a further milestone after we have
                                            completed the coding.`,
                        q3: 'What does the word "completion" mean in your listings?',
                        ans3: `Completion" means the completion of the coding of the previously agreed
                                            services. We will demonstrate completion by sending a video or a clickable
                                            test version. Due to missing API keys, some features may not work fully in a
                                            clickable test version, the project is still completed and the API keys are
                                            of course added free of charge before uploading to the customer's server. We
                                            can only make any changes after receipt of payment, as long as the
                                            previously discussed framework is fulfilled. Of course, we accept minor
                                            changes free of charge.`,
                        q4: `You're so cheap, how can that be? Is that serious?`,
                        ans4: `We would like to support startups & founders and know the lack of money when
                                            starting a business ourselves. We see ourselves as your first investor and
                                            give each of our customers an internal rating. Instead of investing money in
                                            you, we invest our working hours and only take a small amount, usually 4
                                            digits, to be able to cover at least part of our costs such as wages, rent,
                                            servers, software, etc. as a small safeguard. For example, if your offer
                                            consists of 5,000 euros and 10% company shares, we usually invest working
                                            time equivalent to around 20,000 euros in you and your project. In the
                                            further course, we are of course also interested in supporting you as best
                                            we can to get our joint project asap in the black - only then will we earn
                                            money ;)`,
                        q5: 'What is the difference to an agency?',
                        ans5: `We are not an ordinary agency, but serial founders ourselves with a special
                                            offer. We not only offer you the pure development, but also our own
                                            experience from more than 10 successfully launched startups. We felt we made
                                            every conceivable mistake that one can make and can therefore protect you
                                            from most stumbling blocks. When it comes to development, we have often had
                                            the experience ourselves of being plunged into high costs by external
                                            partners without really getting any closer to the goal. To avoid this, we
                                            offer our Code4Equity model to ensure that we are pulling together as a
                                            partner to achieve success together and not just billing hours. We act as
                                            co-founders and advise you on which features really make sense and
                                            proactively give you valuable tips and experience to save time and money. In
                                            addition, we support you with our network of investors, marketing
                                            specialists, influencers and many other exciting contacts. Thanks to our
                                            agile startup culture and our large and experienced team, we usually achieve
                                            an MVP-capable project within a short time.`,
                    },
                    contact: {
                        anyQuestions: 'Have Any Questions ? Let’s Start Talk',
                        getInTouch: 'Get In Touch',
                        form: {
                            fullName: 'Full Name',
                            phoneNumber: 'Phone Number',
                            email: 'Email',
                            subject: 'Subject',
                            message: '',
                            button: {
                                send: 'Send',
                            },
                        },
                    },
                    footer: {
                        projects: 'Projects',
                        about: 'About',
                        blog: 'Blog',
                        services: 'Services',
                        jobs: 'Jobs',
                        instagram: 'Instagram',
                        behance: 'Behance',
                        facebook: 'Facebook',
                        copyRight: '&copy;2023 - DataKraft | All Rights Reserved',
                    },
                },
            },
            de: {
                translation: {
                    process: 'Ablauf',
                    startups: 'Unsere Startups',
                    code4equity: 'Code4Equity',
                    services: 'Unsere Leistungen',
                    faqLink: 'FAQ',
                    companyDescription: 'Vis-a-Vis Ventures ist ein Company Builder für digitale Geschäftsmodelle',
                    mainHeading: 'Design. <br />Entwicklung. <br />',
                    getStarted: 'Starten Sie in kürzester Zeit mit uns',
                    featuresHeading: 'Funktionen',
                    design: {
                        duration: '3-4 Tage | Figma-Design',
                        title: 'Design',
                        description:
                            'Nach unserem ersten Treffen und der Aufgabenstellung werden wir zusammen mit Ihnen ein vollständiges Design unseres Produkts in Figma erstellen.',
                    },
                    developProduct: {
                        duration: '4-8 Wochen | Erste Version',
                        title: 'Produkt entwickeln',
                        description:
                            'Wir halten nicht viel von MVPs oder Ähnlichem, da die gewonnene Erfahrung in der Regel nicht 1:1 im eigentlichen Endprodukt umgesetzt werden kann. Mit einem großen Team setzen wir unser gemeinsames Projekt daher direkt in einer fertigen ersten Version um.',
                    },
                    maintenance: {
                        duration: 'Monatlich | Kontinuierliches Wachstum',
                        title: 'Kostenlose Wartung und weitere Entwicklung im ersten Jahr',
                        description:
                            'Mit unserem Team von Marketing- und Vertriebsspezialisten sowie Finanzierungsexperten unterstützen wir das Wachstum und die Weiterentwicklung unseres Startups. Über 100 betreute Projekte sprechen für sich. Bei Kosten von weniger als einem Vollzeitentwickler - einschließlich neuer Funktionen jeden Monat mit unseren Entwicklern.',
                    },
                    testimonialsSectionTitle: 'Was unsere Kunden über Lösungen sagen',
                    testimonialsHeading: 'Kundenbewertungen',
                    testimonial1: {
                        name: 'Max, Snow Resort Tycoon',
                        content:
                            'Die Zusammenarbeit mit dem Team von Visavis Ventures war jederzeit äußerst professionell. Neben der Entwicklung unterstützte uns das Team auch bei Marketing und Finanzierung unseres wirklich umfangreichen Projekts.',
                    },
                    testimonial2: {
                        name: 'Mustafa, Food Delivery App',
                        content:
                            'Ich war beeindruckt von der Benutzerfreundlichkeit, der inaktiven Marketingoption und der rund um die Uhr verfügbaren Unterstützung des Teams. Ich würde jedem meiner Kollegen empfehlen, mit Visavis-Ventures zusammenzuarbeiten.',
                    },
                    testimonial3: {
                        name: 'Morgan, Hornycorn',
                        content:
                            'Es war eine Freude, mit dem Team von Visavis-Ventures zu arbeiten. Die gelieferten Grafiken waren wirklich fantastisch.',
                    },
                    turningIdeasText: 'Ideen gemeinsam in die Realität umsetzen.',
                    sayHelloTo: 'Sag hallo zu',
                    realCTO: {
                        heading: 'Echter CTO',
                        description: 'Ein CTO, der zusammen mit Ihnen vor Investoren wirbt.',
                    },
                    realCoFounder: {
                        heading: 'Echter Mitgründer',
                        description: 'Ein Mitgründer, der mit Ihnen an der gemeinsamen Gründung arbeitet.',
                    },
                    teamOfDevelopers: {
                        heading: 'Team von Entwicklern',
                        description: 'Ein Team von Entwicklern, das Ihr Produkt lebendig macht.',
                    },
                    code4EquityIntro: 'Innovatives Code4Equity ermöglicht den Erfolg von Startups',
                    code4EquityHeading: 'Code4Equity',
                    code4EquityParagraph1:
                        'Stärkung von Startups über traditionelle Agenturarbeit hinaus durch unser innovatives Code4Equity-Programm.',
                    code4EquityParagraph2: 'Was bedeutet das genau?',
                    code4EquityParagraph3:
                        "Stellen Sie sich vor: Jemand wie Moritz träumt von einer App ähnlich wie TikTok, steht jedoch vor Finanzierungsproblemen. Wir treten ein, gestalten Moritz' App für eine bescheidene 4-stellige Gebühr und einen Anteil von 7-15% an seinem Unternehmen.",
                    code4EquityParagraph4:
                        'Unser Engagement geht über die Entwicklung hinaus. Wir bieten kontinuierliche Unterstützung, Fachwissen in Finanzierung und Marketing, um sicherzustellen, dass das gemeinsame Projekt gedeiht.',
                    code4EquityParagraph5:
                        'Obwohl wir uns oft nach der ersten oder zweiten Finanzierungsrunde zurückziehen, sind wir offen dafür, als geschätzter Agenturpartner weiterzuarbeiten.',
                    customSolutions: {
                        intro: 'Innovative Entwicklungslösungen für Wachstum.',
                        heading: 'Individuelle Lösungen',
                        appDevelopment: {
                            title: 'App-Entwicklung',
                            cost: '3.5 - 7k € +',
                            shares: 'Anteile',
                            description1: 'Validieren Sie Ihr Produkt, indem Sie zahlende Kunden gewinnen.',
                            description2: 'Eine Website und ein Prozess, die Ihr Problem für Ihre Kunden lösen können.',
                            duration: '2 Wochen',
                        },
                        webDevelopment: {
                            title: 'Webentwicklung',
                            cost: '3.5 - 7k € +',
                            shares: 'Anteile',
                            description1: 'Spezifikation und Design für Ihr Markteintrittsprodukt.',
                            description2:
                                'Klickbares Mockup, klare Roadmap und zuverlässige Zahlen für Sie und Investoren.',
                            duration: '2 Wochen',
                        },
                        gameDevelopment: {
                            title: 'Spieleentwicklung',
                            cost: '5 - 15k €',
                            shares: 'ohne Anteile',
                            description1: 'Starten Sie Ihr Produkt, um skalierbare Kunden zu gewinnen.',
                            description2:
                                'Eine voll funktionsfähige App oder Web-App, damit Sie Kunden skalierbar bedienen können.',
                            duration: '10 Wochen',
                        },
                        eCommerce: {
                            title: 'eCommerce',
                            cost: 'Auf Anfrage',
                            shares: '',
                            description1: 'Pflegen und wachsen Sie mit Product Market Fit.',
                            description2: 'Mehr Kunden und ein besseres Conversion-Funnel mit jedem Kunden-Feedback.',
                            duration: 'Kontinuierlich',
                        },
                    },
                    additionalServices: {
                        intro: 'Zusätzliche Dienstleistungen',
                        description:
                            'Erkunden Sie unsere maßgeschneiderten Lösungen, und lassen Sie uns eine Partnerschaft schaffen, die zum Erfolg führt.',
                        heading: 'Keine Anteile aufgeben?',
                        card1: {
                            title: 'Finanzierung',
                            description1: 'Erhalten Sie Mittel für innovative Geschäftsideen',
                            description2:
                                'Recherche zu förderfähigen Programmen, Vorbereitung, Bewerbung und Präsentation',
                            duration1: 'Gemeinsam',
                            duration2: '4 Wochen',
                        },
                        card2: {
                            title: 'Distribution',
                            description1:
                                'Sparen Sie Zeit und Geld durch klaren Fokus und erreichen Sie Ihre Ziele doppelt so schnell',
                            description2:
                                'Individuelles Coaching mit Serienunternehmern in den Bereichen Technologie, Vertrieb, Marketing usw.',
                            duration1: 'Kontinuierlich',
                        },
                        card3: {
                            title: 'E-Marketing',
                            description1: 'Stellen Sie Codequalität sicher und erhalten Sie klare nächste Schritte',
                            description2: 'Bericht und klare Empfehlungen, die Ihnen Monate Arbeit ersparen werden',
                            duration1: '2 Wochen',
                        },
                        card4: {
                            title: 'Marketing',
                            description1: 'Gewinnen Sie Geschwindigkeit für Ihr Startup zurück',
                            description2: 'Verständnis Ihrer eigenen Codebasis, klare Roadmap und Zahlen',
                            duration1: '4 Wochen',
                        },
                    },
                    startUp: {
                        intro: 'Zusätzliche Dienstleistungen',
                        description:
                            'Erkunden Sie unsere maßgeschneiderten Lösungen und lassen Sie uns eine Partnerschaft schaffen, die zum Erfolg führt.',
                        heading: 'Eigene Startups',
                    },
                    faq: {
                        intro: 'FAQ',
                        description:
                            'Erkunden Sie unsere maßgeschneiderten Lösungen und lassen Sie uns eine Partnerschaft schaffen, die zum Erfolg führt.',
                        heading: 'Gib keine Anteile auf?',
                        q1: 'Gehört der Code mir?',
                        ans1: `Nach vollständiger Zahlung und wenn das Code4Equity-Angebot genutzt wurde, gehört der Code natürlich Ihnen und wird Ihnen über Github oder ähnliche Dienste zugesandt.`,
                        q2: 'Wie erhalten Sie Ihre Zahlung?',
                        ans2: `In den meisten Fällen arbeiten wir mit Zahlungen in Etappen. Eine Unterteilung nach dem Versand des Designs ist üblich, ebenso wie eine weitere Etappe, nachdem wir die Codierung abgeschlossen haben.`,
                        q3: 'Was bedeutet das Wort "Abschluss" in Ihren Angeboten?',
                        ans3: `"Abschluss" bedeutet das Abschließen der Codierung der zuvor vereinbarten Dienstleistungen. Wir werden den Abschluss durch das Senden eines Videos oder einer klickbaren Testversion demonstrieren. Aufgrund fehlender API-Schlüssel funktionieren einige Funktionen möglicherweise nicht vollständig in einer klickbaren Testversion. Das Projekt ist jedoch abgeschlossen, und die API-Schlüssel werden selbstverständlich kostenlos vor dem Hochladen auf den Server des Kunden hinzugefügt. Änderungen können nur nach Erhalt der Zahlung vorgenommen werden, solange der zuvor besprochene Rahmen erfüllt ist. Natürlich akzeptieren wir geringfügige Änderungen kostenlos.`,
                        q4: 'Du bist so billig, wie kann das sein? Ist das ernst gemeint?',
                        ans4: `Wir möchten Startups und Gründer unterstützen und kennen den Geldmangel beim Start eines eigenen Geschäfts aus eigener Erfahrung. Wir sehen uns als Ihre ersten Investoren und geben jedem unserer Kunden eine interne Bewertung. Anstatt Geld in Sie zu investieren, investieren wir unsere Arbeitsstunden und nehmen nur einen geringen Betrag, normalerweise vierstellig, um zumindest einen Teil unserer Kosten wie Gehälter, Miete, Server, Software usw. abzudecken. Zum Beispiel, wenn Ihr Angebot 5.000 Euro und 10% Unternehmensanteile beträgt, investieren wir in der Regel Arbeitszeit im Wert von etwa 20.000 Euro in Sie und Ihr Projekt. Im weiteren Verlauf sind wir natürlich auch daran interessiert, Sie bestmöglich zu unterstützen, damit unser gemeinsames Projekt so schnell wie möglich schwarze Zahlen schreibt - erst dann verdienen auch wir Geld ;)`,
                        q5: 'Was unterscheidet Sie von einer Agentur?',
                        ans5: `Wir sind keine gewöhnliche Agentur, sondern selbst Seriengründer mit einem besonderen Angebot. Wir bieten Ihnen nicht nur die reine Entwicklung, sondern auch unsere eigene Erfahrung aus mehr als 10 erfolgreich gestarteten Startups. Wir haben jeden erdenklichen Fehler gemacht, den man machen kann, und können Sie daher vor den meisten Stolpersteinen schützen. In Bezug auf die Entwicklung haben wir oft selbst die Erfahrung gemacht, durch externe Partner in hohe Kosten gestürzt zu werden, ohne dem Ziel wirklich näher zu kommen. Um dies zu vermeiden, bieten wir unser Code4Equity-Modell an, um sicherzustellen, dass wir gemeinsam als Partner Erfolg haben und nicht nur Stunden abrechnen. Wir agieren als Mitgründer, beraten Sie dazu, welche Funktionen wirklich sinnvoll sind, geben Ihnen proaktiv wertvolle Tipps und Erfahrungen, um Zeit und Geld zu sparen. Darüber hinaus unterstützen wir Sie mit unserem Netzwerk von Investoren, Marketingexperten, Influencern und vielen anderen spannenden Kontakten. Dank unserer agilen Start-up-Kultur und unserem großen und erfahrenen Team erreichen wir in der Regel innerhalb kurzer Zeit ein MVP-fähiges Projekt.`,
                    },
                    contact: {
                        anyQuestions: 'Haben Sie Fragen? Lassen Sie uns sprechen',
                        getInTouch: 'In Kontakt treten',
                        form: {
                            fullName: 'Voller Name',
                            phoneNumber: 'Telefonnummer',
                            email: 'E-Mail',
                            subject: 'Betreff',
                            message: '',
                            button: {
                                send: 'Senden',
                            },
                        },
                    },
                    footer: {
                        projects: 'Projekte',
                        about: 'Über uns',
                        blog: 'Blog',
                        services: 'Dienstleistungen',
                        jobs: 'Jobs',
                        instagram: 'Instagram',
                        behance: 'Behance',
                        facebook: 'Facebook',
                        copyRight: '&copy;2023 - DataKraft | Alle Rechte vorbehalten',
                    },
                },
            },
        },
    });

    function changeLanguage(lang) {
        i18next.changeLanguage(lang, (err, t) => {
            document.querySelectorAll('[data-i18n]').forEach((element) => {
                const key = element.getAttribute('data-i18n');
                element.innerHTML = t(key);
            });
        });
    }
    changeLanguage(currentLanguage);
});
