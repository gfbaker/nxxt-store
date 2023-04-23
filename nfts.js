const nfts = [
	{
		"category": "digital-art",
		"network": "ethereum",
		"price": 0.05,
		"title": "Roman Waves",
		"author": "CryptoArtGirl",
		"description": "Abstract digital art piece created using generative algorithms.",
		"image": "https://i.pinimg.com/564x/c3/38/18/c338186c771b9f520cab35c93c2bc61e.jpg",
		"id": "0guOueye9tWtwVeXEJmx"
	},
	{
		"category": "digital-art",
		"network": "ethereum",
		"price": 0.2,
		"title": "The Last Supper",
		"author": "CryptoArtLover",
		"description": "Digital art piece inspired by the beauty of nature and its colors.",
		"image": "https://i.pinimg.com/564x/be/e0/7a/bee07a625acaada972155b3366902d62.jpg",
		"id": "5SXTHE16bLg2hDD7ThNn"
	},
	{
		"category": "humanoide",
		"network": "ethereum",
		"price": 0.15,
		"title": "The Last complexity",
		"author": "CryptoArtMaster",
		"description": "Digital art piece depicting the beauty of the human form and its complexity.",
		"image": "https://i.pinimg.com/564x/e4/fb/f5/e4fbf5dc90a498e050f0560359b57e26.jpg",
		"id": "7MFHEZMi4dIGQWpgefc4"
	},
	{
		"category": "abstract",
		"network": "ethereum",
		"price": 0.1,
		"title": "The gran cañon",
		"author": "CryptoArtCreator",
		"description": "Digital art piece created with fluid dynamics simulations to evoke a sense of motion and fluidity.",
		"image": "https://i.pinimg.com/564x/09/6a/2e/096a2e48cd5305104e56448b5d9a53dd.jpg",
		"id": "897Sz90CUIBaIvNLyO46"
	},
	{
		"category": "landscape",
		"network": "ethereum",
		"price": 0.3,
		"title": "The elf D",
		"author": "CryptoArtPainter",
		"description": "Digital art piece inspired by the beauty of the natural landscape and its colors.",
		"image": "https://i.pinimg.com/564x/6b/88/cb/6b88cb2263200c1dd0e1c1bf865abfd4.jpg",
		"id": "8Tb0XbJXNwv3227CV9Rh"
	},
	{
		"image": "https://i.pinimg.com/736x/44/63/7c/44637c5199041181385ceb4e9a8170b3.jpg",
		"category": "landscape",
		"id": "9LP9OTykp6EJTtde9fPD",
		"network": "ethereum",
		"title": "Palm Twins",
		"price": 0.0089,
		"author": "Linda",
		"description": "A beautiful landscape painting depicting a serene countryside."
	},
	{
		"category": "humanoide",
		"image": "https://i.pinimg.com/564x/d9/e8/62/d9e862d747aaaacd38dd68d014612b9a.jpg",
		"id": "BLD9IM8FYNOjXod5mzdX",
		"network": "ethereum",
		"price": 1.23,
		"title": "Don't cry for me, Gold",
		"author": "John",
		"description": "A digital artwork of a humanoid figure, with a futuristic aesthetic."
	},
	{
		"image": "https://i.pinimg.com/564x/95/6b/99/956b99d8bd2478c3781a26e500636cff.jpg",
		"category": "abstract",
		"id": "BwUKNRqOOnBWcCdId9NV",
		"network": "ethereum",
		"title": "Sea of Dreams",
		"price": 0.5,
		"author": "Sophie",
		"description": "An abstract painting with vibrant colors and bold brushstrokes."
	},
	{
		"category": "digital-art",
		"network": "ethereum",
		"price": 0.345,
		"author": "Artie",
		"image": "https://i.pinimg.com/564x/6d/e9/91/6de9913b39c7e0031d13bf010bc269a9.jpg",
		"title": "Flex The Mastermind",
		"id": "CmgUhSaiUQPhAV8H7g35",
		"description": "A digital artwork of a character named Flex, with a futuristic and urban vibe."
	},
	{
		"category": "landscape",
		"image": "https://i.pinimg.com/736x/21/04/3a/21043abe19bd2a15686d8bf81aa0a8d3.jpg",
		"id": "EUy2sv21W4kewioyhi7t",
		"network": "ethereum",
		"price": 0.0034,
		"author": "Jack",
		"title": "Sea Tree",
		"description": "A digital painting of a sunset over the ocean, with warm colors and gentle waves."
	},
	{
		"category": "digital-art",
		"image": "https://i.pinimg.com/564x/d9/53/4c/d9534ca3688b0cce934f1f6c54ef4b65.jpg",
		"id": "G4woHJGlXDl6STuOQrrc",
		"network": "ethereum",
		"price": 0.123,
		"author": "DigitalDreamer",
		"title": "Digital Escape",
		"description": "A beautiful digital art piece with vivid colors and a futuristic style."
	},
	{
		"category": "humanoide",
		"image": "https://i.pinimg.com/564x/e7/58/6b/e7586be77ea8c53617f4df7961539c38.jpg",
		"id": "HuwEEH0ur6jg02Brka05",
		"network": "ethereum",
		"price": 0.567,
		"author": "ArtTech",
		"title": "Stone and face",
		"description": "A humanoid character design with intricate details and a realistic look."
	},
	{
		"image": "https://i.pinimg.com/564x/1b/cf/f4/1bcff4e2334d53e3339402ce3966649a.jpg",
		"category": "digital-art",
		"id": "IINGYWnSlvPoFAClHKt8",
		"network": "ethereum",
		"title": "Car float night",
		"price": 0.789,
		"author": "CryptoArt",
		"description": "An abstract digital art piece with bold shapes and lines in bright colors."
	},
	{
		"image": "https://i.pinimg.com/736x/8f/ca/93/8fca9322e2ad714667b6577a33d94cc3.jpg",
		"category": "humanoide",
		"id": "JjIiqlppKXq0aDhzcLgg",
		"network": "ethereum",
		"title": "The green cut",
		"price": 1.234,
		"author": "RoboArt",
		"description": "A robotic character design with a sleek and modern look, perfect for sci-fi fans."
	},
	{
		"category": "digital-art",
		"image": "https://i.pinimg.com/564x/8e/b6/c6/8eb6c6264fd484bbc9ce739b05f0b761.jpg",
		"id": "PWaMtLdaJrkLu9DcXiUt",
		"network": "ethereum",
		"price": 0.456,
		"title": "Watch out",
		"author": "PixelMaster",
		"description": "A pixel art piece with a retro aesthetic and vibrant colors, reminiscent of classic video games."
	},
	{
		"category": "abstract",
		"image": "https://i.pinimg.com/564x/57/79/22/5779226f089a76e8705488aad36fd928.jpg",
		"price": 0.1758,
		"title": "Syllabus",
		"author": "Psychedelics Anonymous Genesis",
		"network": "ethereum",
		"description": "A unique and vibrant abstract artwork, showcasing a colorful pattern of geometric shapes.",
		"id": "PaefdEylKhtTybigesMb"
	},
	{
		"category": "landscape",
		"image": "https://i.pinimg.com/736x/1e/af/47/1eaf4739ebfca366bad400135a97e58c.jpg",
		"price": 0.8275,
		"title": "Sunset at the Mountains",
		"author": "Lucas Santos",
		"network": "ethereum",
		"description": "A breathtaking view of the sun setting behind the majestic mountains, painted with warm and vibrant colors.",
		"id": "RPYNrm2R9SUHoEANtN3V"
	},
	{
		"image": "https://i.pinimg.com/564x/3c/6e/8e/3c6e8eb551fb575dfddae40482056034.jpg",
		"category": "abstract",
		"price": 0.0499,
		"title": "Colorful Vortex",
		"author": "Artistic Mind",
		"network": "ethereum",
		"description": "An intense and mesmerizing abstract artwork, featuring a swirling vortex of vibrant colors that draws you in.",
		"id": "TNqEbMPcHxBnmUAh4s3B"
	},
	{
		"category": "digital-art",
		"image": "https://i.pinimg.com/564x/c1/65/a9/c165a95ed7722534ec735b64cf89c6c9.jpg",
		"price": 0.35,
		"title": "Cyber City",
		"author": "Digital Dreams",
		"network": "ethereum",
		"description": "A futuristic and neon-lit digital artwork, showcasing a bustling cityscape of towering skyscrapers and sleek flying cars.",
		"id": "U9paPFU77htTg5gnPA5B"
	},
	{
		"image": "https://i.pinimg.com/564x/b3/4c/d7/b34cd70b842b8affce996055816d7274.jpg",
		"category ": "abstract",
		"price": 0.1555,
		"title": "Electric Dreams",
		"author": "Electric Universe",
		"network": "ethereum",
		"description": "A captivating abstract artwork, featuring a dazzling display of electric blue and purple colors that seem to dance on the canvas.",
		"id": "WZpFR916QH7eeNGL0QM6"
	},
	{
		"network": "ethereum",
		"author": "Alex Diaconu",
		"category": "humanoide",
		"image": "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/eee33335478615.56f93ba04d795.jpg",
		"title": "Worms the face",
		"price": 34,
		"description": "A surreal digital art piece featuring a human-like figure with worms coming out of their face.",
		"id": "WmP85l31eAe9lniKCXCH"
	},
	{
		"category": "abstract",
		"image": "https://i.pinimg.com/736x/b1/ce/a6/b1cea6829e2006d0b8f60b5cd3e3f5b2.jpg",
		"network": "ethereum",
		"author": "Maria Smith",
		"title": "No point of return",
		"price": 0.039,
		"description": "A vibrant abstract art piece featuring geometric shapes and bold colors.",
		"id": "YmJSGrwrb2rv1wBxO2lQ"
	},
	{
		"category": "abstract",
		"image": "https://i.pinimg.com/564x/c7/1d/70/c71d70406e1850013e139ce1b8d92332.jpg",
		"network": "ethereum",
		"author": "John Doe",
		"title": "Black sun",
		"price": 0.12,
		"description": "An abstract digital art piece featuring a chaotic composition of shapes and colors.",
		"id": "Ze23XbUdmXs89tOdYzbP"
	},
	{
		"category": "landscape",
		"image": "https://i.pinimg.com/736x/3a/d0/b9/3ad0b984f9d06cd135c30090b87fb647.jpg",
		"network": "ethereum",
		"author": "Jane Smith",
		"price": 1.25,
		"title": "Buffalo lake",
		"description": "A beautiful landscape art piece featuring a scenic mountain view.",
		"id": "bQgxXZ0mNofhmE3eU7F5"
	},
	{
		"category": "abstract",
		"image": "https://i.pinimg.com/564x/eb/21/2b/eb212b5ac166404d1c9d912ab864b3c2.jpg",
		"network": "ethereum",
		"author": "Sarah Johnson",
		"title": "Flower sun",
		"price": 0.075,
		"description": "An abstract digital art piece featuring a pattern of circles and triangles in cool colors.",
		"id": "df7Una57JScaQKUDhbxZ"
	},
	{
		"network": "ethereum",
		"author": "Anna Lee",
		"category": "landscape",
		"image": "https://i.pinimg.com/564x/75/00/21/750021e3c2b4407989008bb74e7753cc.jpg",
		"title": "Into the Unknown",
		"price": 12.5,
		"description": "A beautiful landscape painting that depicts an unknown and mysterious place",
		"id": "eqXWBaiALuo2nl8lF91g"
	},
	{
		"network": "ethereum",
		"author": "John Smith",
		"category": "humanoide",
		"image": "https://i.pinimg.com/564x/43/60/41/4360411089687fd0214f6164670faae1.jpg",
		"title": "Cyborg",
		"price": 0.75,
		"description": "A digital artwork of a futuristic cyborg with glowing eyes and metallic parts",
		"id": "j2IPnlKNtdx3jUpegJxD"
	},
	{
		"network": "ethereum",
		"author": "Sophia Hernandez",
		"category": "digital-art",
		"image": "https://i.pinimg.com/564x/d6/8c/24/d68c2435e2071264e95855c91be77cb1.jpg",
		"title": "Pixel Art",
		"price": 0.05,
		"description": "A digital artwork created using pixel art technique, featuring various vibrant colors and patterns",
		"id": "k7BoiW3P7MGmubKShFWv"
	},
	{
		"network": "ethereum",
		"author": "Maria Rodriguez",
		"category": "landscape",
		"image": "https://i.pinimg.com/736x/f4/ab/c1/f4abc1b07941189629db073165b5dc5c.jpg",
		"title": "Nature's Serenity",
		"price": 3.75,
		"description": "A serene landscape painting depicting a calm and peaceful natural scene",
		"id": "lCQFbEkOSLXJvCi7Y72v"
	},
	{
		"network": "ethereum",
		"author": "David Lee",
		"category": "humanoide",
		"image": "https://i.pinimg.com/564x/40/e0/0c/40e00cbbd3d4623f6860fe4c6dd64036.jpg",
		"title": "Android",
		"price": 1.25,
		"description": "A digital artwork of a futuristic android with glowing eyes and mechanical parts",
		"id": "nQfyYOzmc76mEO695psa"
	},
	{
		"image": "https://i.pinimg.com/564x/ac/3e/f6/ac3ef640098b41e22e5ea3c7f645e1a8.jpg",
		"category": "abstract",
		"id": "nnzSOZCEqTb5Cm2xOp3x",
		"network": "ethereum",
		"price": 0.5,
		"title": "Drifting",
		"author": "John Smith",
		"description": "This abstract artwork is inspired by the shapes and colors of nature."
	},
	{
		"category": "landscape",
		"image": "https://i.pinimg.com/564x/16/ef/b1/16efb1d8b7fcf9dd48c19835a7113fd1.jpg",
		"id": "oe0bmkyWMSgFY95iKZtL",
		"network": "ethereum",
		"price": 0.1,
		"title": "Moonlight",
		"author": "Emily Lee",
		"description": "This landscape painting depicts a serene scene of a lake surrounded by mountains."
	},
	{
		"category": "abstract",
		"image": "https://i.pinimg.com/564x/c9/51/bb/c951bb145ed82eee7259f3fc5bd426fc.jpg",
		"id": "qrAOQK76LJNzzEsvZToX",
		"network": "ethereum",
		"price": 0.3,
		"title": "Geometry land",
		"author": "Jane Doe",
		"description": "This abstract piece represents the artist's inner turmoil and emotions."
	},
	{
		"image": "https://i.pinimg.com/564x/61/ce/8b/61ce8bc3ac26c9dc8954678dfe41e56d.jpg",
		"category": "abstract",
		"id": "swgvPcowwQobth5PwIko",
		"network": "ethereum",
		"price": 1,
		"title": "Texture in color",
		"author": "Michael Johnson",
		"description": "This abstract painting is a mix of vibrant colors and shapes, representing the artist's optimism and joy."
	},
	{
		"image": "https://i.pinimg.com/564x/89/77/e4/8977e433b34a659ac9bc5c10be1f1ee2.jpg",
		"category": "landscape",
		"id": "w9nEf3mgsccfOpDAjjxx",
		"network": "ethereum",
		"price": 0.2,
		"title": "Shoreline",
		"author": "David Kim",
		"description": "This landscape artwork depicts a beautiful sunset over the ocean, with warm colors and serene atmosphere."
	},
	{
		"category": "humanoide",
		"image": "https://i.pinimg.com/564x/4a/a6/02/4aa6026ac08acc1431df03e19fe11b7f.jpg",
		"id": "x8HzcYiAFu5dZZK8nC1b",
		"network": "ethereum",
		"price": 0.05,
		"title": "Medusa gum",
		"author": "CryptoArtist01",
		"description": "This NFT depicts a humanoid robot. It represents the blending of technology and humanity in our future."
	},
	{
		"category": "landscape",
		"image": "https://i.pinimg.com/736x/d8/1b/9d/d81b9d1265b220312cff6c935e9b083f.jpg",
		"id": "xPKtfuRXaU4fefXX9jWA",
		"network": "ethereum",
		"price": 0.1,
		"title": "Into the calm",
		"author": "DigitalArt21",
		"description": "This NFT is a beautiful landscape painting of a peaceful countryside. It is inspired by the artist's childhood memories."
	},
	{
		"image": "https://i.pinimg.com/564x/46/a0/8b/46a08bcb6783d8669433b5fe47f0ee3c.jpg",
		"category": "humanoide",
		"id": "znnSxqDstkJ3pNXDOWNb",
		"network": "ethereum",
		"price": 0.08,
		"title": "Nft face",
		"author": "CryptoPainter",
		"description": "This NFT is a digital artwork that depicts a half-human half-robot figure. It symbolizes the merging of humanity and technology."
	}
]

export default nfts;