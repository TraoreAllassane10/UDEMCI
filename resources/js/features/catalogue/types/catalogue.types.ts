export interface CourseItem {
    id: number;
    title: string;
    instructor: string;
    category: string;
    level: string;
    levelBadge: string;
    duration: string;
    promoTag?: string;
    rating: number;
    reviewsCount: number;
    studentsCount: string;
    price: number;
    priceFormatted: string;
    originalPriceFormatted?: string;
    badgeDotColor: string;
    categoryColor: string;
    feature: string;
    featureIcon: "zap" | "offline" | "cert" | "excel" | "audio" | "download";
    actionText: string;
    image: string;
}