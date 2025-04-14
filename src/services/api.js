import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true
});

// 차량 관련 API
export const vehicleService = {
  // 차량 목록 조회
  getVehicles: async (params) => {
    try {
      const response = await axiosInstance.get("/vehicles", { params });
      return response.data;
    } catch (error) {
      console.error("차량 목록 조회 실패:", error);
      throw error;
    }
  },

  // 차량 상세 정보 조회
  getVehicleById: async (id) => {
    try {
      const response = await axiosInstance.get(`/vehicles/${id}`);
      //console.log("차량 상세 정보 조회 응답:", response.data);
      return response.data;
    } catch (error) {
      console.error("차량 상세 정보 조회 실패:", error);
      throw error;
    }
  },

  // 브랜드 목록 조회
  getBrands: async (isDomestic) => {
    try {
      //console.log("브랜드 조회 요청:", isDomestic);
      const response = await axiosInstance.get("/vehicles/brands", {
        params: { is_domestic: isDomestic },
      });
      //console.log("브랜드 조회 응답:", response.data);
      return response.data;
    } catch (error) {
      console.error("브랜드 목록 조회 실패:", error);
      throw error;
    }
  },
};

// 리뷰 관련 API
export const reviewService = {
  // 리뷰 목록 조회
  getReviews: async (params) => {
    try {
      const response = await axiosInstance.get("/reviews", { params });
      return response.data;
    } catch (error) {
      console.error("리뷰 목록 조회 실패:", error);
      throw error;
    }
  },

  // 리뷰 작성
  createReview: async (data) => {
    try {
      const response = await axiosInstance.post("/reviews", data);
      return response.data;
    } catch (error) {
      console.error("리뷰 작성 실패:", error);
      throw error;
    }
  },
};

// 프로모션 관련 API
export const promotionService = {
  // 프로모션 목록 조회
  getPromotions: async (status) => {
    try {
      const response = await axiosInstance.get("/promotions", {
        params: { status },
      });
      return response.data;
    } catch (error) {
      console.error("프로모션 목록 조회 실패:", error);
      throw error;
    }
  },

  // 프로모션 상세 정보 조회
  getPromotionById: async (id) => {
    try {
      const response = await axiosInstance.get(`/promotions/${id}`);
      return response.data;
    } catch (error) {
      console.error("프로모션 상세 정보 조회 실패:", error);
      throw error;
    }
  },
};

// 문의 관련 API
export const inquiryService = {
  // 문의 작성
  createInquiry: async (data) => {
    try {
      const response = await axiosInstance.post("/inquiries", data);
      return response.data;
    } catch (error) {
      console.error("문의 작성 실패:", error);
      throw error;
    }
  },
};

export default {
  vehicleService,
  reviewService,
  promotionService,
  inquiryService,
};
