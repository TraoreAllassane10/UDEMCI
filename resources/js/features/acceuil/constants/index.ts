export type Course = {
    id: number;
    title: string;
    instructor: string;
    instructorRole: string;
    category: string;
    cycle: "college" | "lycee" | "universite" | "pro";
    badge: string;
    badgeType: "secondary" | "tertiary";
    duration: string;
    rating: number;
    reviewsCount: number;
    levelTag: string;
    price: string;
    originalPrice: string;
    image: string;
};

export const COURSES: Course[] = [
    {
        id: 1,
        title: "Prépa Concours ENA 2025 : Culture Générale & Droit Public Ivoirien",
        instructor: "Dr. Kouamé N'Guessan",
        instructorRole: "Docteur en Droit Public",
        category: "Préparation Concours",
        cycle: "pro",
        badge: "Bestseller Concours",
        badgeType: "tertiary",
        duration: "38h 15min",
        rating: 4.9,
        reviewsCount: 1420,
        levelTag: "Concours",
        price: "25 000 FCFA",
        originalPrice: "40 000 FCFA",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHTYUjBzwX-6lKCCQY-Du29ojETKQOhJGoGL73bA8PZB3i4VrlcM6T14CzA7kZfRenpezb9nqq4bRHN4dEc_dwpp5y5Sa_7wdR3Hw_1iQ_p0jOXSZEx0kEZMkrXlrQbazMajGkCjR3Un5eSWT6ino5Lq5CIQNeKqtw4hCoIdAOXQG1N8ffCeIKX6Al8cQnfy2YCfyfxLqw9srO-UW5l9JFo1q-DlRAoPdIx5m7lMoeH33XOVsktQAD",
    },
    {
        id: 2,
        title: "Mathématiques Terminale C & D : Maîtrise Complète des Fonctions & Intégrales",
        instructor: "M. Yao Konan",
        instructorRole: "Professeur Certifié",
        category: "Lycée • BAC",
        cycle: "lycee",
        badge: "Programme Officiel CI",
        badgeType: "secondary",
        duration: "44h 30min",
        rating: 4.8,
        reviewsCount: 890,
        levelTag: "Terminale",
        price: "12 500 FCFA",
        originalPrice: "20 000 FCFA",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV6ZNp6Kp7WEF_0tJM4yd33kBwnE5wPY-sZJALI-DkV83W2zCurw8S2JDp3b1jJzWNmT0YaTROH-P92TE5YxHliw0Cy0ezK4NtOHCrLEigQQHLfGLSJ1xb-C_Z3rPGQo8q4-zD3qlsLpqrRzy6NjAN708C6MbPHq4xncohLHb6WWv9Dk2uefM8bu-NnI7Mr9jUCziAd00r-daDMVhbrEyfyeUseUBiGIHGPVU3nK_tLa5MDWZj38Aw",
    },
    {
        id: 3,
        title: "Développeur Web Fullstack Moderne avec Python, Django et React",
        instructor: "Amina Bakayoko",
        instructorRole: "Lead Dev & Formatrice Tech",
        category: "Informatique & Tech",
        cycle: "pro",
        badge: "Bootcamp Métier",
        badgeType: "tertiary",
        duration: "62h 00min",
        rating: 4.95,
        reviewsCount: 2110,
        levelTag: "Pratique",
        price: "30 000 FCFA",
        originalPrice: "50 000 FCFA",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0zKZXhhoMyYJHFDIm4UbHmMRuxafjk3E6KpSPZBTX-slEMMQ6BSx5i2knABo8EDng8PtW1hKzpw8HwXGNqY7rIyJEcSG_1Qis7NHlkE0IkfgxwqRD4_spJlpID3c55Q7JnKFxB8Qa2xdMAeJLR6h0qgJ1ZPaBGYnPjq8e-SOpwKE-4rp2VBi1Mde2L5hEEvpVd-4yilnI7vP2mrhe-yyLos6IFphkHpZzQ7HRwJO802sHiIXErO08",
    },
    {
        id: 4,
        title: "Pratique de la Comptabilité Générale Système Comptable OHADA Révisé",
        instructor: "Alain K. Touré",
        instructorRole: "Expert-Comptable Diplômé",
        category: "Économie & Finance",
        cycle: "universite",
        badge: "Norme OHADA",
        badgeType: "secondary",
        duration: "28h 40min",
        rating: 4.8,
        reviewsCount: 670,
        levelTag: "Universitaire",
        price: "18 000 FCFA",
        originalPrice: "28 000 FCFA",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmKkz06yJVc8IGLxcanyr-cWdqHvFZZCYvZyH9aApTtO4PwT6X3ib-4qKEkYnFk9gG7Sq-mvA3Ex3Q1zfCPSlrjzhuwrJUDxuLrbx7uofqHIzVmQ51u4jU1zqnZ5uNz7ASDLAcfiM1EzFWkcW_-qeugYJQ8sYdPxVjiSE8zf5o8wFNCpce35rdJCBh_JAy_QRF0TdLZob2hCgQvYnsqR3zz3F8lAN8QOaPxNxT0KfdNYMkCiBhZFCV",
    },
];
