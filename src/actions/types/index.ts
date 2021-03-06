export enum ActionTypes {
  // App global state
  APP_SHOW_LOADING = 'app_show_loading',
  APP_HIDE_LOADING = 'app_hide_loading',
  APP_DID_OCCUR_ERROR = 'app_did_occur_error',

  // Login actions
  LOGIN_DID_ATTEMPT = 'login_did_attempt',
  LOGIN_DID_SUCCESS = 'login_did_success',
  LOGIN_DID_FAIL = 'login_did_fail',

  // Forgot password actions
  LOGIN_FORGOT_PASSWORD_REQUEST = 'login_forgot_password_request',
  LOGIN_FORGOT_PASSWORD_REQUEST_DID_SUCCESS = 'login_forgot_password_did_success',
  LOGIN_FORGOT_PASSWORD_REQUEST_DID_FAIL = 'login_forgot_password_did_fail',

  // User actions
  USER_GET_ACCOUNT_INFO = 'user_get_account_info',
  USER_GET_ACCOUNT_INFO_DID_SUCCESS = 'user_get_account_info_did_success',
  USER_GET_ACCOUNT_INFO_DID_FAIL = 'user_get_account_info_did_fail',
  USER_GET_PURCHASES = 'user_get_purchases',
  USER_GET_PURCHASES_DID_SUCCESS = 'user_get_purchases_did_success',
  USER_GET_PURCHASES_DID_FAIL = 'user_get_purchases_did_fail',
  USER_GET_PURCHASES_DETAILS = 'user_get_purchases_details',
  USER_GET_PURCHASES_DETAILS_DID_SUCCESS = 'user_get_purchases_details_did_success',
  USER_GET_PURCHASES_DETAILS_DID_FAIL = 'user_get_purchases_details_did_fail',
  USER_GET_PURCHASES_RESUME = 'user_get_purchases_resume',
  USER_GET_PURCHASES_RESUME_DID_SUCCESS = 'user_get_purchases_resume_did_success',
  USER_GET_PURCHASES_RESUME_DID_FAIL = 'user_get_purchases_resume_did_fail',

  USER_CHANGE_INFO_VIEW_STATS = 'user_change_info_view_stats',
  USER_GET_GENERAL_ACCOUNT_INFO = 'user_get_general_account_info',
  USER_GET_GENERAL_ACCOUNT_INFO_DID_SUCCESS = 'user_get_general_account_info_did_success',
  USER_GET_GENERAL_ACCOUNT_INFO_DID_FAIL = 'user_get_general_account_info_did_fail',

  // Partner actions
  APP_GET_PARTNERS = 'app_get_partners',
  APP_GET_PARTNERS_DID_SUCCESS = 'app_get_partners_did_success',
  APP_GET_PARTNERS_DID_FAIL = 'app_get_partners_did_fail',
  APP_GET_PARTNER_DETAIL = 'app_get_partner_detail',
  APP_GET_PARTNER_DETAIL_DID_SUCCESS = 'app_get_partner_detail_did_success',
  APP_GET_PARTNER_DETAIL_DID_FAIL = 'app_get_partner_detail_did_fail',
}
