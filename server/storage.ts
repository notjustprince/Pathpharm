import { 
  type User, 
  type InsertUser, 
  type Category, 
  type InsertCategory,
  type Article,
  type InsertArticle,
  type Quiz,
  type InsertQuiz
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Category methods
  getAllCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  updateCategoryArticleCount(id: string, count: number): Promise<void>;
  
  // Article methods
  getAllArticles(): Promise<Article[]>;
  getArticleById(id: string): Promise<Article | undefined>;
  getArticlesByCategory(categoryId: string): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
  
  // Quiz methods
  getAllQuizzes(): Promise<Quiz[]>;
  getQuizzesByCategory(categoryId: string | null): Promise<Quiz[]>;
  createQuiz(quiz: InsertQuiz): Promise<Quiz>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private categories: Map<string, Category>;
  private articles: Map<string, Article>;
  private quizzes: Map<string, Quiz>;

  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.articles = new Map();
    this.quizzes = new Map();
  }

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Category methods
  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryBySlug(slug: string): Promise<Category | undefined> {
    return Array.from(this.categories.values()).find(
      (category) => category.slug === slug,
    );
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = { 
      ...insertCategory, 
      id,
      image: insertCategory.image ?? null,
      articleCount: insertCategory.articleCount ?? 0
    };
    this.categories.set(id, category);
    return category;
  }

  async updateCategoryArticleCount(id: string, count: number): Promise<void> {
    const category = this.categories.get(id);
    if (category) {
      this.categories.set(id, { ...category, articleCount: count });
    }
  }

  // Article methods
  async getAllArticles(): Promise<Article[]> {
    return Array.from(this.articles.values());
  }

  async getArticleById(id: string): Promise<Article | undefined> {
    return this.articles.get(id);
  }

  async getArticlesByCategory(categoryId: string): Promise<Article[]> {
    return Array.from(this.articles.values()).filter(
      (article) => article.categoryId === categoryId,
    );
  }

  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = randomUUID();
    const article: Article = { 
      ...insertArticle, 
      id,
      image: insertArticle.image ?? null
    };
    this.articles.set(id, article);
    
    // Update category article count
    const categoryArticles = await this.getArticlesByCategory(insertArticle.categoryId);
    await this.updateCategoryArticleCount(insertArticle.categoryId, categoryArticles.length);
    
    return article;
  }

  // Quiz methods
  async getAllQuizzes(): Promise<Quiz[]> {
    return Array.from(this.quizzes.values());
  }

  async getQuizzesByCategory(categoryId: string | null): Promise<Quiz[]> {
    return Array.from(this.quizzes.values()).filter(
      (quiz) => quiz.categoryId === categoryId,
    );
  }

  async createQuiz(insertQuiz: InsertQuiz): Promise<Quiz> {
    const id = randomUUID();
    const quiz: Quiz = { 
      ...insertQuiz, 
      id,
      categoryId: insertQuiz.categoryId ?? null
    };
    this.quizzes.set(id, quiz);
    return quiz;
  }
}

export const storage = new MemStorage();
