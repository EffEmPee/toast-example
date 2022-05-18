import styled from 'styled-components';
import { ToastContainer, ToastContainerProps } from 'react-toastify';

export const StyledToastContainer = styled(ToastContainer).attrs({
  autoClose: 1000
} as ToastContainerProps)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    max-width: 15rem;
    margin-left: auto;
  }
  .Toastify__toast-body {
    font-weight: 600;
  }
  .Toastify__progress-bar {
  }

  --toastify-toast-min-height: 50px;

  --toastify-color-light: #f5f5f5;
  --toastify-text-color-light: #111827;
  --toastify-color-success: #008b83;
  --toastify-color-progress-light: var(--toastify-color-success);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-color-progress-success: var(--toastify-color-success);
`;
