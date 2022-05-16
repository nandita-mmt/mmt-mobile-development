// Main Pages
import Home from '../Pages/Home/Home';
import InnovationLab from '../Pages/InnovationLab/InnovationLab';
import FeatureProject from '../Pages/FeatureProject/FeatureProject';
import Chiropractor from '../Pages/Chiropractor/Chiropractor';
import KnowledgeIndustry from '../Pages/KnowledgeIndustry/KnowledgeIndustry';
import ContactUs from '../Pages/ContactUs/ContactUs';
// Inner Sercive Page
import Law from '../Pages/InnerKnowledge/Law/Law';
import HealthCare from '../Pages/InnerKnowledge/HealthCare/HealthCare';
import RealEstate from '../Pages/InnerKnowledge/RealEstate/RealEstate';
import FinanceBanking from '../Pages/InnerKnowledge/FinanceBanking/FinanceBanking';
import Automotive from '../Pages/InnerKnowledge/Automotive/Automotive';
import Astrology from '../Pages/InnerKnowledge/Astrology/Astrology';
import TravelHospitality from '../Pages/InnerKnowledge/TravelHospitality/TravelHospitality';
import Immigration from '../Pages/InnerKnowledge/Immigration/Immigration';

// Service Pages
import BlockChain from '../Pages/BlockChain/BlockChain';
import DeepLearning from '../Pages/DeepLearning/DeepLearning';
import CoreTech from '../Pages/CoreTech/CoreTech';
import DigitalAcceleration from '../Pages/DigitalAcceleration/DigitalAcceleration';

// Other Service Pages
import WebPractice from '../Pages/WebPractice/WebPractice';
import MobilityPractice from '../Pages/MobilityPractice/MobilityPractice';
import MobilityPractice1 from '../Pages/MobilityPractice1/MobilityPractice';
import TermsConditions from '../Pages/TermsConditions/TermsConditions';
import PrivacyPolicy from '../Pages/PrivacyPolicy/PrivacyPolicy';


import QaPractice from '../Pages/QaPractice/QaPractice';
import NICHESoftware from '../Pages/NICHESoftware/NICHESoftware';

// Corporate Pages
import AboutUs from '../Pages/AboutUs/AboutUs';
import Career from '../Pages/Career/Career';
import Testimonial from '../Pages/Testimonial/Testimonial';
// import Blog from '../Pages/Blog/Blog';

// Others Menu
import WhitePaper from '../Pages/WhitePaper/WhitePaper';
import Teams from '../Pages/Teams/Teams';
import Faq from '../Pages/Faq/Faq';

// Pages for Sub Route
import WhitePaperDownload from '../Pages/WhitePaperDownload/WhitePaperDownload';
// import BlogDetails from '../Pages/BlogDetails/BlogDetails';

// new pages
import CloudManagementService from '../Pages/CloudManagementService/CloudManagementService';
import UiAndGraphics from '../Pages/UiAndGraphics/UiAndGraphics';
import MinimumViabilityProduct from '../Pages/MinimumViabilityProduct/MinimumViabilityProduct';
import CloneAppDevelopment from '../Pages/CloneAppDevelopment/CloneAppDevelopment';
import AppEtyzer from '../Pages/AppEtyzer/AppEtyzer';
import ECommercePlatform from '../Pages/ECommercePlatform/ECommercePlatform';
import WebsiteBuilder from '../Pages/WebsiteBuilder/WebsiteBuilder';
import DigitalTransformation from '../Pages/DigitalTransformation/DigitalTransformation';
import ThankYou from '../Pages/ThankYou/ThankYou';
import MobileLanding from '../Pages/MobileLanding/MobileLanding';


export const ROUTES = [
	{
		path: '/',
		component: Home,
		exact: true,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/innovation-lab',
		component: InnovationLab,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/our-work',
		component: FeatureProject,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/chiropractor',
		component: Chiropractor,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/industries',
		component: KnowledgeIndustry,
		isPrivate: false,
		isEager: true,
	},

	// Inner Service Page Starts Here
	{
		path: '/law',
		component: Law,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/healthcare-&-fitness',
		component: HealthCare,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/real-estate',
		component: RealEstate,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/finance-&-banking',
		component: FinanceBanking,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/automotive',
		component: Automotive,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/astrology',
		component: Astrology,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/travel-&-hospitality',
		component: TravelHospitality,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/immigration',
		component: Immigration,
		isPrivate: false,
		isEager: true,
	},
	// Inner Service Page Starts Here

	{
		path: '/contact-us',
		component: ContactUs,
		isPrivate: false,
		isEager: true,
	},

	// <--------------------------------------- SERVICES STARTS HERE -------------------------------------------->
	{
		path: '/blockchain-development-services',
		component: BlockChain,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/deep-learning',
		component: DeepLearning,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/core-tech',
		component: CoreTech,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/digital-main-acceleration',
		component: DigitalAcceleration,
		isPrivate: false,
		isEager: true,
	},
	// SERVICES ENDS HERE

	// <------------------------------------------ OTHER SERVICES STARTS HERE ------------------------------------------>
	{
		path: '/web-development-services',
		component: WebPractice,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/mobile-app-development-services',
		// path: '/mobile-app-development-services',
		component: MobilityPractice,
		isPrivate: false,
		isEager: true,
	},
   //bablu

	// {
	// 	path: '/digital-acceleration-test',
	// 	component: MobilityPractice1,
	// 	isPrivate: false,
	// 	isEager: true,
	// },

	{
		path: '/digital-marketing-services',
		component: MobilityPractice1,
		isPrivate: false,
		isEager: true,
	},
	 //bablu
	 {
		path: '/terms-conditions',
		component:TermsConditions,
		isPrivate: false,
		isEager: true,
	},
	 //bablu
	 {
		path: '/privacy-policy',
		component:PrivacyPolicy,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/software-testing-services',
		component: QaPractice,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/niche-software',
		component: NICHESoftware,
		isPrivate: false,
		isEager: true,
	},
	// OTHER SERVICES ENDS HERE

	// <---------------------------------------- CORPORATE STARTS HERE -------------------------------------------->
	{
		path: '/about-us',
		component: AboutUs,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/careers',
		component: Career,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/testimonial',
		component: Testimonial,
		isPrivate: false,
		isEager: true,
	},
	// {
	// 	path: '/blog',
	// 	component: Blog,
	// 	isPrivate: false,
	// 	isEager: true,
	// },
	// {
	// 	path: '/blog/:slug',
	// 	component: Blog,
	// 	isPrivate: false,
	// 	isEager: true,
	// },
	// {
	// 	path: '/blogdetails/:slug',
	// 	component: BlogDetails,
	// 	isPrivate: false,
	// 	isEager: true,
	// },
	// CORPORATE ENDS HERE

	// <-------------------------------------------- OTHERS MENU STARTS HERE ------------------------------------------>
	{
		path: '/white-paper',
		component: WhitePaper,
		isPrivate: false,
		isEager: true,
		title: 'Whitepaper',
	},
	{
		path: '/whitepaper-download/:slug',
		component: WhitePaperDownload,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/our-team',
		component: Teams,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/faqs',
		component: Faq,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/cloud-management-services',
		component: CloudManagementService,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/graphics-design-services',
		component: UiAndGraphics,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/mvp-minimum-viability-product',
		component: MinimumViabilityProduct,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/clone-app-development-services',
		component: CloneAppDevelopment,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/restaurant-management-software',
		component: AppEtyzer,
		isPrivate: false,
		isEager: true
	},
	{
		path: '/ecommerce-platform',
		component: ECommercePlatform,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/drag-and-drop-website-builder',
		component: WebsiteBuilder,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/digital-transformation-services',
		component: DigitalTransformation,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/mobile-app-development-services-test',
		component: MobileLanding,
		isPrivate: false,
		isEager: true,
	},
	{
		path: '/thank-you',
		component: ThankYou,
		isPrivate: false,
		isEager: true,
	}
	
	// OTHERS MENU ENDS HERE

	// {
	// 	path: '/admin',
	// 	component: Home,
	// 	isPrivate: true,
	// 	routes: [
	// 		{
	// 			path: '/admin/dashboard',
	// 			component: DashBoard,
	// 			title: 'Dashboard',
	// 			icon: baselineDashboard,
	// 			sidebar: true,
	// 		},
	// 		{
	// 			path: '/admin/users',
	// 			component: Users,
	// 			exact: true,
	// 			title: 'Users',
	// 			icon: userIcon,
	// 			isActive: (_, { pathname }) => pathname.search(/\/users/g) > -1,
	// 			sidebar: true,
	// 		},
	// 		{
	// 			path: '/admin/users/:userId',
	// 			component: User,
	// 			title: 'User Details',
	// 		},
	// 		{
	// 			path: '/admin/products',
	// 			component: Products,
	// 			exact: true,
	// 			title: 'Products',
	// 			icon: productsIcon,
	// 			isActive: (_, { pathname }) => pathname.search(/\/products/g) > -1,
	// 			sidebar: true,
	// 		},
	// 		{
	// 			path: '/admin/products/:productId',
	// 			component: Product,
	// 			title: 'Product Details',
	// 		},
	// 		// {
	// 		// 	path: '/admin/product-approvals',
	// 		// 	component: Approvals,
	// 		// 	exact: true,
	// 		// 	title: 'Approvals',
	// 		// 	icon: alertDecagram,
	// 		// 	sidebar: true,
	// 		// },
	// 		// {
	// 		// 	path: '/admin/product-approvals/:productId',
	// 		// 	component: Approval,
	// 		// 	title: 'Approval Details',
	// 		// },
	// 		{
	// 			path: '/admin/categories',
	// 			component: Categories,
	// 			exact: true,
	// 			title: 'Categories',
	// 			icon: listIcon,
	// 			isActive: (_, { pathname }) => pathname.search(/\/categories/g) > -1,
	// 			sidebar: true,
	// 		},
	// 		{
	// 			path: '/admin/categories/:categoryId',
	// 			component: Category,
	// 			title: "Category's Products",
	// 		},
	// 		{
	// 			path: '/admin/settings',
	// 			component: MasterSettings,
	// 			title: 'Master Settings',
	// 			icon: settingsSolid,
	// 			sidebar: true,
	// 		},
	// 		{
	// 			path: '/admin/communications',
	// 			component: Communications,
	// 			title: 'Communications',
	// 			icon: communication16Filled,
	// 			sidebar: true,
	// 		},

	// 		{
	// 			path: '/admin/orders',
	// 			component: OrderHistory,
	// 			exact: true,
	// 			title: 'Order History',
	// 			icon: fullbordersIcon,
	// 			isActive: (_, { pathname }) => pathname.search(/\/orders/g) > -1,
	// 			sidebar: true,
	// 		},
	// 		{
	// 			path: '/admin/orders/:orderId',
	// 			component: OrderDetails,
	// 			title: 'Order Details',
	// 		},
	// 		{
	// 			path: '/admin/transactions',
	// 			component: TransactionHistory,
	// 			title: 'Transaction History',
	// 			icon: transactionIcon,
	// 			sidebar: true,
	// 		},
	// 		{
	// 			path: '/admin/faq',
	// 			component: Faq,
	// 			title: 'FAQ',
	// 			icon: faqIcon,
	// 			sidebar: true,
	// 		},
	// 		{
	// 			path: '/admin/banners',
	// 			component: Banners,
	// 			title: 'Banners',
	// 			icon: bxImage,
	// 			sidebar: true,
	// 		},
	// 		// {
	// 		// 	path: '/admin/dispute',
	// 		// 	component: Dispute,
	// 		// 	title: 'Dispute',
	// 		// 	icon: bxImage,
	// 		// 	sidebar: true,
	// 		// 	exact: true,
	// 		// },
	// 		// {
	// 		// 	path: '/admin/dispute/:id',
	// 		// 	component: () => <h1>Dispute by id works</h1>,
	// 		// 	title: 'Dispute',
	// 		// },
	// 	],
	// },
];
