type ResearachPaper = {
	title: string;
};

type Git = {
	commit: string;
	howpublished: string;
	journal?: string;
	publisher?: string;
};

type TechReport = {
	institution: string;
	type: string;
	bibsource: string;
};

type Journal = {
	issn?: string;
	isbn?: string;
	journal: string;
	pages?: string;
	volume?: string;
	number?: string;
	issue?: string;
	eprint?: string;
	editor?: string;
};

type Book = {
	keywords?: string;
	note?: string;
	booktitle: string;
	language: string;
};

type WebPage = {
	ID: string;
	ENTRYTYPE: 'webpage';
	url: string;
	title: string;
	year: string;
	month?: string;
	journal?: string;
};

export type BasePaper = {
	ID: string;
	ENTRYTYPE: 'article' | 'inproceedings' | 'misc' | 'techreport' | 'book';
	author: string;
	authors: string[];
	abstract?: string;
	url?: string;
	doi?: string;
	year: string;
	month?: string;
} & (ResearachPaper | Journal | Book | Git | TechReport);

type Paper = BasePaper | WebPage;

export type ReferenceId = keyof typeof papers;

const papers = {
	martinPaper: {
		note: 'AUTOMATA 2021: 27th International Workshop on Cellular Automata and Discrete Complex Systems, AUTOMATA 2021 ; Conference date: 12-07-2021 Through 17-07-2021',
		booktitle: 'AUTOMATA 2021',
		language: 'English',
		year: '2021',
		author: 'M. Skrodzki and Ulrich Reitebuch and Eric Zimmermann',
		abstract:
			'In this paper, we are interested in classifying the different arising (topological) structures of three-dimensional Turing-like patterns. By providing examples for the different structures, we confirm a conjecture regarding these structures within the setup of three-dimensional Turing-like pattern. Furthermore, we investigate how these structures are distributed in the parameter space of the discrete model. We found twofold versions of so-called {"}zero-{"} and {"}one-dimensional{"} structures as well as {"}two-dimensional{"} structures and use our experimental findings to formulate several conjectures for three-dimensional Turing-like patterns and higher-dimensional cases.',
		title:
			'Experimental visually-guided investigation of sub-structures in three-dimensional Turing-like patterns',
		ENTRYTYPE: 'inproceedings',
		ID: 'martinPaper',
		authors: ['M. Skrodzki', 'Ulrich Reitebuch', 'Eric Zimmermann']
	},
	ALSENAFI2018765: {
		keywords:
			'Phase transition, Segregation model, Crime modeling, Territorial formation, Agent-based model, Cross-diffusion',
		author: 'Abdulaziz Alsenafi and Alethea B.T. Barbaro',
		url: 'https://www.sciencedirect.com/science/article/pii/S0378437118308604',
		doi: 'https://doi.org/10.1016/j.physa.2018.07.004',
		issn: '0378-4371',
		year: '2018',
		pages: '765-786',
		volume: '510',
		journal: 'Physica A: Statistical Mechanics and its Applications',
		title: 'A convection\u2013diffusion model for gang territoriality',
		ENTRYTYPE: 'article',
		ID: 'ALSENAFI2018765',
		authors: ['Abdulaziz Alsenafi', 'Alethea B.T. Barbaro']
	},
	Rayon2023: {
		commit: '2c9794343df0ac20643f27a9b9be6514f670a730',
		howpublished: '\\url{https://github.com/rayon-rs/rayon}',
		journal: 'GitHub repository',
		publisher: 'GitHub',
		year: '2023',
		title: 'Rayon',
		author: 'Josh Stone and Niko Matsakis',
		ENTRYTYPE: 'misc',
		ID: 'Rayon2023',
		authors: ['Josh Stone', 'Niko Matsakis']
	},
	'Maxfield:23:W': {
		institution: 'W3C',
		type: '{W3C} Working Draft',
		bibsource: 'https://w2.syronex.com/jmr/w3c-biblio',
		year: '2023',
		note: 'https://www.w3.org/TR/2023/WD-webgpu-20230606/',
		month: 'June',
		title: '{WebGPU}',
		author: 'Myles Maxfield and Brandon Jones and Kai Ninomiya',
		ENTRYTYPE: 'techreport',
		ID: 'Maxfield:23:W',
		authors: ['Myles Maxfield', 'Brandon Jones', 'Kai Ninomiya']
	},
	MarchingCubes: {
		doi: '10.1145/37401.37422',
		journal: 'ACM SIGGRAPH Computer Graphics',
		isbn: '0897912276',
		volume: '21',
		title: 'Marching Cubes: A High Resolution 3D Surface Construction Algorithm',
		pages: '163-',
		month: '08',
		year: '1987',
		author: 'Lorensen, William and Cline, Harvey',
		ENTRYTYPE: 'article',
		ID: 'MarchingCubes',
		authors: ['Lorensen, William', 'Cline, Harvey']
	},
	Concha_Cabido_Pantrigo_Montemayor_2014: {
		pages: '309\u2013327',
		year: '2014',
		author:
			'Concha, David and Cabido, Ra\u00fal and Pantrigo, Juan Jos\u00e9 and Montemayor, Antonio S.',
		journal: 'Journal of Real-Time Image Processing',
		number: '2',
		doi: '10.1007/s11554-014-0483-1',
		volume: '15',
		title:
			'Performance evaluation of a 3D multi-view-based particle filter for visual object tracking using gpus and multicore cpus',
		ENTRYTYPE: 'article',
		ID: 'Concha_Cabido_Pantrigo_Montemayor_2014',
		authors: [
			'Concha, David',
			'Cabido, Ra\u00fal',
			'Pantrigo, Juan Jos\u00e9',
			'Montemayor, Antonio S.'
		]
	},
	GUILLENGONZALEZ2022193: {
		abstract:
			'In this paper we propose two fully discrete Finite Elements (FE) schemes for a repulsive chemotaxis model with a quadratic production term. The first one, which corresponds to the backward Euler in time with FE in space, is energy-stable in the primitive variables of the model, under a \u201ccompatibility\u201d condition on the FE spaces. The second one, which is obtained modifying the scheme proposed in [13] by applying a regularization procedure, has an \u201capproximated positivity\u201d property which is obtained from discrete energy estimates and an additional estimate for a singular functional. These properties are not available in previous approaches. Additionally, we study the well-posedness and the long time behaviour of the schemes, obtaining exponential convergence to constant states as in the continuous problem. Finally, we compare the numerical schemes throughout several numerical simulations, which are in agreement with the theoretical results.',
		keywords:
			'Chemo-repulsion model, Quadratic production, Finite element schemes, Large-time behaviour, Energy-stability, Approximated positivity',
		author:
			'F. Guill\u00e9n-Gonz\u00e1lez and M.A. Rodr\u00edguez-Bellido and D.A. Rueda-G\u00f3mez',
		url: 'https://www.sciencedirect.com/science/article/pii/S0168927421003366',
		doi: 'https://doi.org/10.1016/j.apnum.2021.12.001',
		issn: '0168-9274',
		year: '2022',
		pages: '193-210',
		volume: '173',
		journal: 'Applied Numerical Mathematics',
		title:
			'Comparison of two finite element schemes for a chemo-repulsion system with quadratic production',
		ENTRYTYPE: 'article',
		ID: 'GUILLENGONZALEZ2022193',
		authors: [
			'F. Guill\u00e9n-Gonz\u00e1lez',
			'M.A. Rodr\u00edguez-Bellido',
			'D.A. Rueda-G\u00f3mez'
		]
	},
	Englert_Manson_Jayaraman_2009: {
		pages: '4557\u20134564',
		year: '2009',
		author: 'Englert, Derek L. and Manson, Michael D. and Jayaraman, Arul',
		journal: 'Applied and Environmental Microbiology',
		number: '13',
		doi: '10.1128/aem.02952-08',
		volume: '75',
		title:
			'Flow-based microfluidic device for quantifying bacterial chemotaxis in stable, competing gradients',
		ENTRYTYPE: 'article',
		ID: 'Englert_Manson_Jayaraman_2009',
		authors: ['Englert, Derek L.', 'Manson, Michael D.', 'Jayaraman, Arul']
	},
	'Motility analysis of bacteria-based': {
		pages: '134\u2013143',
		year: '2013',
		author:
			'Park, Daechul and Park, Sung Jun and Cho, Sunghoon and Lee, Yeonkyung and Lee, Yu Kyung and Min, Jung-Joon and Park, Bang Ju and Ko, Seong Young and Park, Jong-Oh and Park, Sukho',
		journal: 'Biotechnology and Bioengineering',
		number: '1',
		doi: '10.1002/bit.25007',
		volume: '111',
		title:
			'Motility analysis of bacteria-based microrobot (bacteriobot) using chemical gradient microchamber',
		ENTRYTYPE: 'article',
		ID: 'Park_Park_Cho_Lee_Lee_Min_Park_Ko_Park_Park_2013',
		authors: [
			'Park, Daechul',
			'Park, Sung Jun',
			'Cho, Sunghoon',
			'Lee, Yeonkyung',
			'Lee, Yu Kyung',
			'Min, Jung-Joon',
			'Park, Bang Ju',
			'Ko, Seong Young',
			'Park, Jong-Oh',
			'Park, Sukho'
		]
	},
	'10.1111/icad.12486': {
		doi: '10.1111/icad.12486',
		pages: '426-438',
		issue: '4',
		volume: '14',
		year: '2021',
		journal: 'Insect Conserv Diversity',
		title:
			'Rapid Assessment Of the Three\u2010dimensional Distribution Of Dominant Arboreal Ants In Tropical Forests',
		author: 'Leponce, M., Dejean, A., Mottl, O., Klimes, P.',
		ENTRYTYPE: 'article',
		ID: '10.1111/icad.12486',
		authors: ['Leponce, M., Dejean, A., Mottl, O., Klimes, P.']
	},
	test: {
		abstract:
			' Making use of experimental data for bias extension, shearing, and point-load tests in large deformation regime for rectangular and square bi-pantographic specimens, we perform a numerical identification to fit the a priori parameters of a planar discrete spring model. The main objective of the work is to develop an automatized optimization process based on the Nelder\u2013Mead simplex algorithm for identifying the constitutive parameters of discrete modeling of bi-pantographic structures, as well as assessing its descriptiveness and predictive capacity. The analysis allows to conclude that there exists a single set of parameters for the adopted discrete modeling such that it is descriptive and predictive for several different tests and for a wide range of deformations. ',
		eprint: ' \nhttps://doi.org/10.1177/10812865221107623\n',
		url: ' \nhttps://doi.org/10.1177/10812865221107623\n',
		doi: '10.1177/10812865221107623',
		year: '2022',
		pages: '2201-2217',
		number: '10',
		volume: '27',
		journal: 'Mathematics and Mechanics of Solids',
		title:
			'Experimental analysis, discrete modeling and parameter optimization of SLS-printed bi-pantographic structures',
		author:
			'Jonas Harsch and Gregor Ganzosch and Emilio Barchiesi and Alessandro Ciallella and Simon R Eugster',
		ENTRYTYPE: 'article',
		ID: 'test',
		authors: [
			'Jonas Harsch',
			'Gregor Ganzosch',
			'Emilio Barchiesi',
			'Alessandro Ciallella',
			'Simon R Eugster'
		]
	},
	'10.1673/031.011.0126': {
		doi: '10.1673/031.011.0126',
		pages: '1-30',
		issue: '26',
		volume: '11',
		year: '2011',
		journal: 'Journal of Insect Science',
		title: 'The Organization Of Foraging In the Fire Ant,solenopsis Invicta',
		author: 'Tschinkel, W. R.',
		ENTRYTYPE: 'article',
		ID: '10.1673/031.011.0126',
		authors: ['Tschinkel, W. R.']
	},
	Nguyen_2007: {
		month: 'Aug',
		year: '2007',
		journal: 'NVIDIA Developer',
		url: 'https://developer.nvidia.com/gpugems/gpugems3/part-vi-gpu-computing/chapter-37-efficient-random-number-generation-and-application',
		title: 'Chapter 37. efficient random number generation and application using Cuda',
		ENTRYTYPE: 'webpage',
		ID: 'Nguyen_2007'
	},
	'Giuggioli.2011': {
		year: '2011',
		journal: 'Plos Computational Biology',
		title: 'Animal Interactions and the Emergence of Territoriality',
		doi: '10.1371/journal.pcbi.1002008',
		author: 'Giuggioli, Luca and Potts, Jonathan R. and Harris, Stephen J.',
		ENTRYTYPE: 'article',
		ID: 'Giuggioli.2011',
		authors: ['Giuggioli, Luca', 'Potts, Jonathan R.', 'Harris, Stephen J.']
	},
	'Potts.2014': {
		year: '2014',
		journal: 'Proceedings of the Royal Society B Biological Sciences',
		title:
			'How Do Animal Territories Form and Change? Lessons From 20 Years of Mechanistic Modelling',
		doi: '10.1098/rspb.2014.0231',
		author: 'Potts, Jonathan R. and Lewis, Mark A.',
		ENTRYTYPE: 'article',
		ID: 'Potts.2014',
		authors: ['Potts, Jonathan R.', 'Lewis, Mark A.']
	},
	Polya1921: {
		year: '1921',
		volume: '84',
		url: 'http://eudml.org/doc/158886',
		title:
			'\u00dcber eine Aufgabe der Wahrscheinlichkeitsrechnung betreffend die Irrfahrt im Stra\u00dfennetz',
		pages: '149-160',
		journal: 'Mathematische Annalen',
		author: 'P\u00f3lya, G.',
		ENTRYTYPE: 'article',
		ID: 'P\u00f3lya1921',
		authors: ['P\u00f3lya, G.']
	},
	'Khokon.2021': {
		year: '2021',
		journal: 'Microorganisms',
		title:
			'Soil Layers Matter: Vertical Stratification of Root-Associated Fungal Assemblages in Temperate Forests Reveals Differences in Habitat Colonization',
		doi: '"10.3390/microorganisms9102131"',
		author: 'Khokon, Anis Mahmud and Schneider, Dominik and Daniel, Rolf and Polle, Andrea',
		ENTRYTYPE: 'article',
		ID: 'Khokon.2021',
		authors: ['Khokon, Anis Mahmud', 'Schneider, Dominik', 'Daniel, Rolf', 'Polle, Andrea']
	},
	PEARSON_1905: {
		pages: '294\u2013294',
		year: '1905',
		author: 'PEARSON, KARL',
		journal: 'Nature',
		number: '1865',
		doi: '10.1038/072294b0',
		volume: '72',
		title: 'The problem of the Random Walk',
		ENTRYTYPE: 'article',
		ID: 'PEARSON_1905',
		authors: ['PEARSON, KARL']
	},
	Liu_Wang_Zhou_Wang_2022: {
		pages: '11925',
		year: '2022',
		author: 'Liu, Danjun and Wang, Pengfei and Zhou, Xu and Wang, Baosheng',
		journal: 'Applied Sciences',
		number: '23',
		doi: '10.3390/app122311925',
		volume: '12',
		title: 'Erace: Toward facilitating exploit generation for kernel race vulnerabilities',
		ENTRYTYPE: 'article',
		ID: 'Liu_Wang_Zhou_Wang_2022',
		authors: ['Liu, Danjun', 'Wang, Pengfei', 'Zhou, Xu', 'Wang, Baosheng']
	},
	Alsenafi_Barbaro_2021: {
		pages: '1428',
		year: '2021',
		author: 'Alsenafi, Abdulaziz and Barbaro, Alethea',
		journal: 'Mathematics',
		number: '12',
		doi: '10.3390/math9121428',
		volume: '9',
		title: 'A multispecies cross-diffusion model for territorial development',
		ENTRYTYPE: 'article',
		ID: 'Alsenafi_Barbaro_2021',
		authors: ['Alsenafi, Abdulaziz', 'Barbaro, Alethea']
	},
	'Buhmann:1998:DCQ': {
		note: "(Proc. Eurographics'98)\n\\httpsAddr{//diglib.eg.org/handle/10.2312/8491}",
		doi: '10.1111/1467-8659.00269',
		pages: 'C219-C231',
		year: '1998',
		month: 'September',
		number: '3',
		volume: '17',
		editor: 'N. Ferreira and M. G\\"{o}bel',
		journal: 'Computer Graphics Forum',
		title: 'Dithered Color Quantization',
		author: 'J. M. Buhmann and D. W. Fellner and M. Held and J.\nKetterer and J. Puzicha',
		ENTRYTYPE: 'article',
		ID: 'Buhmann:1998:DCQ',
		authors: ['J. M. Buhmann', 'D. W. Fellner', 'M. Held', 'J.\nKetterer', 'J. Puzicha']
	},
	'Fellner-Helmberg93': {
		doi: '10.1145/169711.169704',
		pages: '251-276',
		year: '1993',
		month: 'July',
		number: '3',
		volume: '12',
		journal: 'ACM TOG',
		title: 'Robust Rendering of General Ellipses and Elliptical Arcs',
		author: 'Fellner, Dieter W. and Helmberg, Christoph',
		ENTRYTYPE: 'article',
		ID: 'Fellner-Helmberg93',
		authors: ['Fellner, Dieter W.', 'Helmberg, Christoph']
	},
	'FolDamFeiHug.etal93': {
		year: '1993',
		publisher: 'Addison-Wesley',
		title: 'Introduction to Computer Graphics',
		author:
			'Foley, James D. and van Dam, Andries and\nFeiner, Stephen K. and Hughes, John F. and Phillips, R.',
		ENTRYTYPE: 'book',
		ID: 'FolDamFeiHug.etal93',
		authors: [
			'Foley, James D.',
			'van Dam, Andries and\nFeiner, Stephen K.',
			'Hughes, John F.',
			'Phillips, R.'
		]
	},
	'Kobbelt97-USHDR': {
		note: "(Proc. Eurographics'97)\n\\httpsAddr{//diglib.eg.org/handle/10.2312/8393}",
		doi: '10.1111/1467-8659.16.3conferenceissue.36',
		year: '1997',
		pages: 'C347-C355',
		number: '3',
		volume: '16',
		journal: 'Computer Graphics Forum',
		title: 'Using Subdivision on Hierarchical Data to Reconstruct Radiosity\nDistribution',
		author: 'L. Kobbelt and M. Stamminger and H.-P. Seidel',
		ENTRYTYPE: 'article',
		ID: 'Kobbelt97-USHDR',
		authors: ['L. Kobbelt', 'M. Stamminger', 'H.-P. Seidel']
	},
	'Lafortune97-NARF': {
		doi: '10.1145/258734.258801',
		year: '1997',
		pages: '117-126',
		volume: '31',
		booktitle: "Proc. SIGGRAPH '97",
		title: 'Non-Linear Approximation of Reflectance Functions',
		author:
			'Eric P. Lafortune and Sing-Choong Foo and Kenneth E. Torrance and\nDonald P. Greenberg',
		ENTRYTYPE: 'inproceedings',
		ID: 'Lafortune97-NARF',
		authors: [
			'Eric P. Lafortune',
			'Sing-Choong Foo',
			'Kenneth E. Torrance and\nDonald P. Greenberg'
		]
	},
	Lous90: {
		doi: '10.1111/j.1467-8659.1990.tb00430.x',
		pages: '371-372',
		year: '1990',
		month: 'December',
		number: '4',
		volume: '9',
		journal: 'Computer Graphics Forum',
		title:
			'Report on the {F}irst {E}urographics {W}orkshop on {V}isualization in\n{S}cientific {C}omputing',
		author: 'Y. Le Lous',
		ENTRYTYPE: 'article',
		ID: 'Lous90',
		authors: ['Y. Le Lous']
	},
	Seidel93: {
		doi: '10.1145/169728.169726',
		pages: '1-34',
		year: '1993',
		month: 'January',
		number: '1',
		volume: '12',
		journal: 'ACM TOG',
		title: 'Polar Forms for Geometrically Continuous Spline Curves of\nArbitrary Degree',
		author: 'Seidel, Hans-Peter',
		ENTRYTYPE: 'article',
		ID: 'Seidel93',
		authors: ['Seidel, Hans-Peter']
	},
	'10.1007/978-3-642-21834-7_13': {
		doi: '10.1007/978-3-642-21834-7_13',
		pages: '228-247',
		year: '2011',
		journal: 'Applications and Theory of Petri Nets',
		title: 'The Mutex Paradigm Of Concurrency',
		author: 'Kleijn, J., Koutny, M.',
		ENTRYTYPE: 'article',
		ID: '10.1007/978-3-642-21834-7_13',
		authors: ['Kleijn, J., Koutny, M.']
	},
	ZHAO2015156: {
		title: 'Demand for multi-scale weather data for regional crop modeling',
		journal: 'Agricultural and Forest Meteorology',
		volume: '200',
		pages: '156-171',
		year: '2015',
		issn: '0168-1923',
		doi: 'https://doi.org/10.1016/j.agrformet.2014.09.026',
		url: 'https://www.sciencedirect.com/science/article/pii/S0168192314002500',
		author:
			'Gang Zhao and Stefan Siebert and Andreas Enders and Ehsan Eyshi Rezaei and Changqing Yan and Frank Ewert',
		ENTRYTYPE: 'article',
		ID: 'ZHAO2015156',
		authors: [
			'Gang Zhao',
			'Stefan Siebert',
			'Andreas Enders',
			'Ehsan Eyshi Rezaei',
			'Changqing Yan',
			'Frank Ewert'
		]
	},
	trautner2021line: {
		title: 'Line Weaver: Importance-Driven Order Enhanced Rendering of Dense Line Charts',
		author: 'Trautner, Thomas and Bruckner, Stefan',
		booktitle: 'Computer Graphics Forum',
		volume: '40',
		number: '3',
		pages: '399-410',
		year: '2021',
		ENTRYTYPE: 'inproceedings',
		ID: 'trautner2021line',
		authors: ['Trautner, Thomas', 'Bruckner, Stefan']
	},
	StructuredBrushing: {
		doi: 'https://doi.org/10.1111/cgf.12901',
		author:
			'Radoš, S. and Splechtna, R. and Matković, K. and Đuras, M. and Gröller, E. and Hauser, H.',
		title: 'Towards Quantitative Visual Analytics with Structured Brushing and Linked Statistics',
		journal: 'Computer Graphics Forum',
		year: '2015',
		month: '01',
		volume: '35',
		number: '3',
		pages: '251-260',
		ENTRYTYPE: 'article',
		ID: 'StructuredBrushing',
		authors: [
			'Radoš, S.',
			'Splechtna, R.',
			'Matković, K.',
			'Đuras, M.',
			'Gröller, E.',
			'Hauser, H.'
		]
	},
	Albero: {
		author:
			'Diehl, A. and Pelorosso, L. and Delrieux, C. and Matković, K. and Ruiz, J. and Gröller, M.E. and Bruckner, S.',
		title: 'Albero: A Visual Analytics Approach for Probabilistic Weather Forecasting',
		journal: 'Computer Graphics Forum',
		volume: '36',
		number: '7',
		year: '2017',
		month: '10',
		pages: '135-144',
		keywords:
			'Categories and Subject Descriptors (according to ACM CCS), I.3.3 Computer Graphics: Picture/Image Generation—Viewing algorithms, I.3.6 Computer Graphics: Methodology and Techniques—Interaction techniques, I.3.8 Computer Graphics: Applications—Probabilistic Weather Forecasting',
		doi: 'https://doi.org/10.1111/cgf.13279',
		url: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/cgf.13279',
		ENTRYTYPE: 'article',
		ID: 'Albero',
		authors: [
			'Diehl, A.',
			'Pelorosso, L.',
			'Delrieux, C.',
			'Matković, K.',
			'Ruiz, J.',
			'Gröller, M.E.',
			'Bruckner, S.'
		]
	},

	YANG19931: {
		abstract:
			'This paper is a survey of fuzzy set theory applied in cluster analysis. These fuzzy clustering algorithms have been widely studied and applied in a variety of substantive areas. They also become the major techniques in cluster analysis. In this paper, we give a survey of fuzzy clustering in three categories. The first category is the fuzzy clustering based on fuzzy relation. The second one is the fuzzy clustering based on objective function. Finally, we give an overview of a nonparametric classifier. That is the fuzzy generalized k-nearest neighbor rule.',
		keywords:
			'Cluster analysis, Fuzzy clustering, Fuzzy -partitions, Fuzzy relation, Fuzzy -means, Fuzzy generalized -nearest neighbor rule, Cluster validity',
		author: 'M.-S. Yang',
		url: 'https://www.sciencedirect.com/science/article/pii/089571779390202A',
		doi: 'https://doi.org/10.1016/0895-7177(93)90202-A',
		issn: '0895-7177',
		year: '1993',
		pages: '1-16',
		number: '11',
		volume: '18',
		journal: 'Mathematical and Computer Modelling',
		title: 'A survey of fuzzy clustering',
		ENTRYTYPE: 'article',
		ID: 'YANG19931',
		authors: ['M.-S. Yang']
	},
	fan2021sketch: {
		title:
			'On sketch-based selections from scatterplots using KDE, compared to Mahalanobis and CNN brushing',
		author: 'Fan, Chaoran and Hauser, Helwig',
		journal: 'IEEE Computer Graphics and Applications',
		volume: '41',
		number: '5',
		pages: '67-78',
		year: '2021',
		publisher: 'IEEE',
		ENTRYTYPE: 'article',
		ID: 'fan2021sketch',
		authors: ['Fan, Chaoran', 'Hauser, Helwig']
	},
	'9120181': {
		author: 'Zhou, Shuisheng and Li, Dong and Zhang, Zhuan and Ping, Rui',
		journal: 'IEEE Transactions on Fuzzy Systems',
		title: 'A New Membership Scaling Fuzzy C-Means Clustering Algorithm',
		year: '2021',
		volume: '29',
		number: '9',
		pages: '2810-2818',
		keywords:
			'Clustering algorithms;Convergence;Acceleration;Fuzzy systems;Trajectory;Indexes;Robustness;Fuzzy c-means (FCM);membership degree;membership scaling (MS);triangular inequality',
		doi: '10.1109/TFUZZ.2020.3003441',
		ENTRYTYPE: 'article',
		ID: '9120181',
		authors: ['Zhou, Shuisheng', 'Li, Dong', 'Zhang, Zhuan', 'Ping, Rui']
	},
	ben2015computational: {
		title: 'Computational feasibility of clustering under clusterability assumptions',
		author: 'Ben-David, Shai',
		journal: 'arXiv preprint arXiv:1501.00437',
		year: '2015',
		ENTRYTYPE: 'article',
		ID: 'ben2015computational',
		authors: ['Ben-David, Shai'],
		doi: 'https://doi.org/10.48550/arXiv.1501.00437'
	},
	wei2011parallel: {
		title: 'Parallel clustering for visualizing large scientific line data',
		author: 'Wei, Jishang and Yu, Hongfeng and Chen, Jacqueline H and Ma, Kwan-Liu',
		booktitle: '2011 IEEE Symposium on Large Data Analysis and Visualization',
		pages: '47-55',
		year: '2011',
		journal: 'IEEE',
		ENTRYTYPE: 'inproceedings',
		ID: 'wei2011parallel',
		authors: ['Wei, Jishang', 'Yu, Hongfeng', 'Chen, Jacqueline H', 'Ma, Kwan-Liu']
	}
} satisfies { [key: string]: Paper };

export { papers };
