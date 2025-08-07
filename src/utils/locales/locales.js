import {team} from "./team.js";
import {performances} from "./performances.js";
import {media} from "./media.js";

export const locales = {
    logo: {
        en: "Theater Experiment",
        ru: "Театр Эксперимент"
    },
    nav: {
        about: {
            en: "About",
            ru: "О нас",
        },
        team: {
            en: "Our Team",
            ru: "Наша команда",
        },
        performances: {
            en: "Performances",
            ru: "Спектакли",
        },
        media: {
            en: "Media",
            ru: "Медиа",
        },
    },
    main: {
        title: {
            en: "Experiment Theater",
            ru: "Театр Эксперимент",
        },
        description: {
            en: "The Experiment Theater is a non-profit organization founded by a group of enthusiasts from Maryland, USA in 2010. The first director of the theater was Dmitry Shahov. Irina Rogozina, our Artistic Director, Director, and Acting Coach, joined the team in 2011.",
            ru: "Театр Эксперимент — некоммерческая организация, основанная группой энтузиастов из Мэриленда, США, в 2010 году. Первым режиссером театра был Дмитрий Шахов. Ирина Рогозина, наш художественный руководитель, режиссер и актерский тренер, присоединилась к команде в 2011 году."
        },
    },
    footer: {
        en: "© 2025 Theater Experiment. All rights reserved.",
        ru: "© 2025 Театр Эксперимент. Все права защищены."
    },
    about: {
        title: {
            en: "About Our Theater",
            ru: "О нашем театре",
        },
        description: {
            en: "The Experiment Theater is a theater group based in Maryland, USA. The theater was founded in 2010 by Dmitry Shahov, producer and video director. Irina Rogozina, who is our Artistic Director and Acting Coach, came on board in 2011.",
            ru: "Театр Эксперимент — это театральная группа, основанная в Мэриленде, США. Театр был основан в 2010 году Дмитрием Шаховым, продюсером и видео режиссером. Ирина Рогозина, наш художественный руководитель и актерский тренер, присоединилась к команде в 2011 году."
        },
        goal: {
            en: "[[Our goal]]  is to provide residents of DC, Maryland, and Virginia, as well as of any other place in the US with the ability to experience quality theater and the works of the best writers of the world at an affordable price. Each time we perform on stage, we would like to extend our hand of friendship to everyone, from our heart to your heart: [[to make our world a better place through the magic of literature and theater.]]",
            ru: "[[Наша цель]] — предоставить жителям Вашингтона, Мэриленда и Вирджинии, а также всем желающим из других уголков США возможность насладиться качественным театром и произведениями лучших писателей мира по доступной цене. Каждый раз, когда мы выступаем на сцене, мы хотим протянуть руку дружбы каждому зрителю, от сердца к сердцу: [[сделать наш мир лучше с помощью магии литературы и театра.]]"
        },
        team: {
            en: "[[Our team]] is a group of professional adults of all ages from DC, Maryland, and Virginia. Our actors have different backgrounds in education, we also have people who have professional education as actors, ballet dancers, musicians, set designers, photographers and video producers. We have a spectacular opportunity to explore our creative side and we achieved very good results. We all love THEATER, we constantly learn acting techniques, history and basics of drama theater. We present classic plays by world famous writers.",
            ru: "[[Наша команда]] — это группа профессиональных взрослых людей всех возрастов из Вашингтона, Мэриленда и Вирджинии. Наши актеры имеют разное образование, среди нас есть люди с профессиональным образованием в области актерского мастерства, балета, музыки, сценографии, фотографии и видеопродакшна. У нас есть замечательная возможность развивать нашу творческую сторону, и мы достигли очень хороших результатов. Мы все любим ТЕАТР, постоянно изучаем актерские техники, историю и основы драматического театра. Мы представляем классические пьесы мировых писателей."
        },
        director: {
            en: "[[Irina Rogozina]] has been managing the Experiment Theater workshop from 2011 to the present. She is a professional actress who played more than 30 leading roles on the stage of of the Novgorod Academic Drama Theater named after F.M.Dostoevsky, Veliky Novgorod.",
            ru: "[[Ирина Рогозина]] руководит театральной мастерской «Эксперимент» с 2011 года по сегодняшний день. Она профессиональная актриса, сыгравшая более 30 главных ролей на сцене Новгородского академического драматического театра имени Ф.М. Достоевского в Великом Новгороде."
        },
        directorsWords: [
            {
                id: 0,
                quote: {
                    en: "All the world's a stage, and all the men and women merely players!",
                    ru: "Весь мир — театр, а люди в нем — актеры!",
                },
                text: {
                    en: "Everyone is familiar with this famous quote from Shakespeare which epitomizes countless discussions, arguments and theories about the role of art in our life, its place in space and time…\nThe following is my impression of what the Experiment Theater and its actors are to me. I cannot stop admiring our actors who create a magical world on stage, and I am grateful to them every time they make my dreams come true.\nActors of our theater are a wonderful bunch! They are intelligent and ingenious, they have great imagination, they are always eager to learn something new. They are always ready to open up their hearts to others — a priceless gift, so rare in this day and age!\nIn today's world we are always in a rush, unable to stop for a moment to look around, let alone turn our gaze inwards. The theater allows that to happen.",
                    ru: "Всем известна эта знаменитая цитата Шекспира, которая воплощает в себе бесчисленные обсуждения, споры и теории о роли искусства в нашей жизни, его месте в пространстве и времени...\nСледующее — это мое впечатление о том, что для меня представляет Театр Эксперимент и его актеры. Я не могу перестать восхищаться нашими актерами, которые создают волшебный мир на сцене, и я благодарна им каждый раз, когда они воплощают мои мечты в жизнь.\nАктеры нашего театра — замечательная группа! Они умны и изобретательны, у них богатое воображение, они всегда стремятся узнать что-то новое. Они всегда готовы открыть свои сердца другим — бесценный дар, столь редкий в наше время!\nВ современном мире мы всегда спешим, не в силах остановиться на мгновение, чтобы оглянуться вокруг, не говоря уже о том, чтобы заглянуть внутрь себя. Театр позволяет это сделать."
                }
            },
            {
                id: 1,
                text: {
                    en: "Ours is a unique place where actors can explore new aspects of their own personalities. It is a kind of therapy that allows us to shake off the cobweb of the daily routine. In our studio, actors let themselves become children again, their minds and hearts open up to welcoming new emotions.\nI remember their very first steps as actors quite well, and I can tell now that many of them have matured professionally and further developed their talents. I am absolutely certain they will continue to surprise us in their future theatrical endeavors. The art of the theater is a living thing — it is what is happening here and now.\nBearing this in mind, I make it a point not to force my actors but to guide and support them. Our continual training is conducted by professional actors. One of our governing rules is what many renowned theater directors emphasize: success often is not as important as failure because you should learn from your mistakes.",
                    ru: "Наш театр — это уникальное место, где актеры могут исследовать новые аспекты своей личности. Это своего рода терапия, которая позволяет нам стряхнуть паутину повседневной рутины. В нашей студии актеры снова становятся детьми, их разум и сердце открываются для новых эмоций.\nЯ хорошо помню их первые шаги в актерском мастерстве, и теперь могу сказать, что многие из них профессионально повзрослели и дальше развили свои таланты. Я абсолютно уверена, что они будут продолжать удивлять нас в своих будущих театральных начинаниях. Искусство театра — это живое существо — это то, что происходит здесь и сейчас.\nУчитывая это, я стараюсь не заставлять своих актеров, а направлять и поддерживать их. Наши постоянные тренировки проводятся профессиональными актерами. Одно из наших основных правил — то, на чем акцентируют внимание многие известные театральные режиссеры: успех часто не так важен, как неудача, потому что вы должны учиться на своих ошибках."
                }
            },
            {
                id: 2,
                text: {
                    en: "Pursuing this principle, we are not afraid to start over again and again or alter our original ideas in the process. I intentionally choose the works of the would-famous and celebrated Russian playwrights such as Anton Chekhov, Nikolay Gogol, Alexander Ostrovsky, and Mikhail Bulgakov for our production.\nI believe that these authors speak the universal truths, which transcend national and cultural boundaries. No language barrier exists in the theater since the notions of joy and sorrow, good and evil require no translation. The main special effects in the theater are human emotions translated and lived through by actors, and that is exactly why people will keep coming to the theater: to experience that wonderful, magical, mystical feeling of the direct emotional involvement with what is happening on stage. Our sincere hope is that our performances will be interesting not only to Russian speakers but also to the general audience.",
                    ru: "Следуя этому принципу, мы не боимся начинать все сначала и снова или изменять наши первоначальные идеи в процессе. Я намеренно выбираю для наших постановок произведения всемирно известных и признанных русских драматургов, таких как Антон Чехов, Николай Гоголь, Александр Островский и Михаил Булгаков.\nЯ считаю, что эти авторы говорят универсальные истины, которые превосходят национальные и культурные границы. В театре нет языкового барьера, поскольку понятия радости и горя, добра и зла не требуют перевода. Главные спецэффекты в театре — это человеческие эмоции, переведенные и прожитые актерами, и именно поэтому люди будут продолжать приходить в театр: чтобы испытать это чудесное, волшебное, мистическое чувство непосредственного эмоционального вовлечения в то, что происходит на сцене. Наша искренняя надежда заключается в том, что наши спектакли будут интересны не только русскоязычным зрителям, но и широкой аудитории."
                },
            },
            {
                id: 3,
                text: {
                    en: "Today’s world that has long lived by the principle “every man for himself” is experiencing a spiritual void that eventually could lead to our further decline as human beings. From our stage, we want to extend our friendship to everyone, person to person and heart to heart. Together, we can make our world a better place!",
                    ru: "Современный мир, который давно живет по принципу «каждый сам за себя», испытывает духовную пустоту, которая в конечном итоге может привести к нашему дальнейшему упадку как человеческих существ. Со сцены мы хотим протянуть руку дружбы каждому, от человека к человеку и от сердца к сердцу. Вместе мы можем сделать наш мир лучше!"
                },
                sign: {
                    en: "- Irina Rogozina -\nPerformance Artistic\n and Producing Director",
                    ru: "- Ирина Рогозина -\nХудожественный руководитель\n и продюсер спектаклей"
                },
            }
        ]
    },
    team,
    performances,
    media
};