import Controller from '@ember/controller';

const people = {
    facultyCollaborators: [
        { name: "Steven H. Low",
            position: "Professor of Computing and Mathematical Sciences & Electrical Engineering",
            imageClass: "steven-low",
            education: "B.S., Cornell University, 1987; M.S., University of California, 1989; Ph.D., 1992. Associate Professor, Caltech, 2000-06; Professor, 2006-.",
            affix: "PI",
            link: "http://netlab.caltech.edu"
        },
        {
            name: "Venkat Chandrasekaran",
            position: "Professor of Computing and Mathematical Sciences & Electrical Engineering",
            imageClass: "vankat-chandrasekaran",
            education: "B.A., Rice University, 2005; B.S., 2005; M.S., Massachusetts Institute of Technology, 2007; Ph.D., 2011. Assistant Professor, Caltech, 2012-17; Professor, 2017-.",
            link: "http://www.eas.caltech.edu/people/venkatc"
        },
        {
            name: "Adam Wierman",
            position: "Professor of Computing and Mathematical Sciences",
            imageClass: "adam-wierman",
            education: "B.S., Carnegie Mellon University, 2001; M.S., 2004; Ph.D., 2007. Assistant Professor, Caltech, 2007-12; Professor, 2012-; Executive Officer, 2015-; Associate Director, 2015-16; Director, 2016-.",
            link: "http://www.eas.caltech.edu/people/adamw"
        },
        {
            name: "Yisong Yue",
            position: "Assistant Professor of Computing and Mathematical Sciences",
            imageClass: "yisong-yue",
            education: "B.S., University of Illinois, 2005; Ph.D., Cornell University, 2010. Caltech, 2014-.",
            link: "http://eas.caltech.edu/people/yyue"
        }
    ]
};

export default Controller.extend({
    people: people
});
