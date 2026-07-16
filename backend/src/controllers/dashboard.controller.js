import { getDashboardStats } from "../services/dashboard.service.js";

/**
 * Dashboard Controller
 */
export const getDashboard = async (req, res) => {

  try {

    const dashboard = await getDashboardStats(
      req.user._id
    );

    return res.status(200).json({
      success: true,
      dashboard,
    });

  } catch (error) {

    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};