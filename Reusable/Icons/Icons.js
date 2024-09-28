// Icon.js
import React from 'react';

const icons = {

    tickets: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_12498)">
                <path d="M4.50732 8.9955L13.4298 5.10925C13.5771 5.04614 13.7354 5.01316 13.8956 5.01223C14.0558 5.0113 14.2145 5.04245 14.3625 5.10384C14.5104 5.16524 14.6446 5.25563 14.7571 5.3697C14.8695 5.48377 14.958 5.61919 15.0173 5.768L21.1723 20.6455C21.3003 20.9472 21.3046 21.287 21.1844 21.5919C21.0643 21.8968 20.8292 22.1422 20.5298 22.2755L11.6086 26.1618C11.4613 26.2251 11.3028 26.2582 11.1425 26.2592C10.9821 26.2603 10.8232 26.2291 10.6751 26.1677C10.527 26.1063 10.3928 26.0159 10.2802 25.9017C10.1676 25.7875 10.0791 25.652 10.0198 25.503L3.86482 10.6243C3.73689 10.3226 3.73254 9.98271 3.85271 9.67785C3.97287 9.37299 4.20795 9.12875 4.50732 8.9955Z" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.75 5H20C20.3315 5 20.6495 5.1317 20.8839 5.36612C21.1183 5.60054 21.25 5.91848 21.25 6.25V10.625" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25 7.5C25.33 7.64 25.65 7.77125 25.96 7.89375C26.2651 8.02323 26.5064 8.26862 26.6306 8.57594C26.7548 8.88325 26.7519 9.22733 26.6225 9.5325L23.75 16.25" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_12498">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),

    log: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_12504)">
                <path d="M5 23.75H25" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 18.75L10 11.25L15 13.75L20 7.5L25 12.5" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_12504">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    copylink: (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 11.6667V2C1 1.44772 1.44772 1 2 1H11.6667C12.219 1 12.6667 1.44772 12.6667 2V11.6667C12.6667 12.219 12.219 12.6667 11.6667 12.6667H2C1.44772 12.6667 1 12.219 1 11.6667Z" stroke="white" stroke-width="0.8" />
            <rect x="3.33398" y="3.33325" width="11.6667" height="11.6667" rx="1" fill="white" />
        </svg>

    ),
    arrowslant: (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_175_17180)">
                <path d="M17.5 7L7.5 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.5 7H17.5V16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_175_17180">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                </clipPath>
            </defs>
        </svg>

    ),
    game: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_12507)">
                <path d="M14.9979 6.25H19.3729C21.0305 6.25 22.6202 6.90848 23.7923 8.08058C24.9644 9.25269 25.6229 10.8424 25.6229 12.5C25.6229 14.1576 24.9644 15.7473 23.7923 16.9194C22.6202 18.0915 21.0305 18.75 19.3729 18.75H12.4979L7.47911 24.0337C7.04981 24.4857 6.48523 24.7859 5.87046 24.8891C5.25569 24.9923 4.62404 24.8929 4.07069 24.6059C3.51733 24.3188 3.07227 23.8597 2.80256 23.2977C2.53285 22.7357 2.45311 22.1013 2.57536 21.49L4.61786 11.2738C4.90137 9.85683 5.6671 8.58192 6.78473 7.66597C7.90236 6.75003 9.30285 6.24966 10.7479 6.25H14.9979Z" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 18.7504L22.5875 24.1054C23.0159 24.5562 23.579 24.8559 24.1923 24.9596C24.8055 25.0633 25.4358 24.9653 25.9887 24.6804C26.5415 24.3954 26.987 23.9389 27.2584 23.3793C27.5298 22.8197 27.6123 22.1871 27.4938 21.5766L25.4938 11.2866" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 11.25V13.75" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.75 12.5H11.25" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 12.5H20" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_12507">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>


    ),
    history: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_12517)">
                <path d="M20 7.5H23.75C24.0815 7.5 24.3995 7.6317 24.6339 7.86612C24.8683 8.10054 25 8.41848 25 8.75V22.5C25 23.163 24.7366 23.7989 24.2678 24.2678C23.7989 24.7366 23.163 25 22.5 25M22.5 25C21.837 25 21.2011 24.7366 20.7322 24.2678C20.2634 23.7989 20 23.163 20 22.5V6.25C20 5.91848 19.8683 5.60054 19.6339 5.36612C19.3995 5.1317 19.0815 5 18.75 5H6.25C5.91848 5 5.60054 5.1317 5.36612 5.36612C5.1317 5.60054 5 5.91848 5 6.25V21.25C5 22.2446 5.39509 23.1984 6.09835 23.9017C6.80161 24.6049 7.75544 25 8.75 25H22.5Z" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 10H15" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 15H15" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 20H15" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_12517">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    tax: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_12520)">
                <path d="M14.9979 6.25H19.3729C21.0305 6.25 22.6202 6.90848 23.7923 8.08058C24.9644 9.25269 25.6229 10.8424 25.6229 12.5C25.6229 14.1576 24.9644 15.7473 23.7923 16.9194C22.6202 18.0915 21.0305 18.75 19.3729 18.75H12.4979L7.47911 24.0337C7.04981 24.4857 6.48523 24.7859 5.87046 24.8891C5.25569 24.9923 4.62404 24.8929 4.07069 24.6059C3.51733 24.3188 3.07227 23.8597 2.80256 23.2977C2.53285 22.7357 2.45311 22.1013 2.57536 21.49L4.61786 11.2738C4.90137 9.85683 5.6671 8.58192 6.78473 7.66597C7.90236 6.75003 9.30285 6.24966 10.7479 6.25H14.9979Z" stroke="#012C51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 18.7504L22.5875 24.1054C23.0159 24.5562 23.579 24.8559 24.1923 24.9596C24.8055 25.0633 25.4358 24.9653 25.9887 24.6804C26.5415 24.3954 26.987 23.9389 27.2584 23.3793C27.5298 22.8197 27.6123 22.1871 27.4938 21.5766L25.4938 11.2866" stroke="#012C51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 11.25V13.75" stroke="#012C51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.75 12.5H11.25" stroke="#012C51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.5 12.5H20" stroke="#012C51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_12520">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    logout: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_12523)">
                <path d="M17.5 10V7.5C17.5 6.83696 17.2366 6.20107 16.7678 5.73223C16.2989 5.26339 15.663 5 15 5H6.25C5.58696 5 4.95107 5.26339 4.48223 5.73223C4.01339 6.20107 3.75 6.83696 3.75 7.5V22.5C3.75 23.163 4.01339 23.7989 4.48223 24.2678C4.95107 24.7366 5.58696 25 6.25 25H15C15.663 25 16.2989 24.7366 16.7678 24.2678C17.2366 23.7989 17.5 23.163 17.5 22.5V20" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.75 15H26.25M26.25 15L22.5 11.25M26.25 15L22.5 18.75" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_12523">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    withdraw: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_175_17101)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V9H4Z" fill="white" />
                <path d="M20 9V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V9M20 9V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V9M20 9H4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 9H20" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 14L12 16L14 14" stroke="#012C51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_175_17101">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    topup: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_175_11028)">
                <path d="M12 2L12.324 2.001L12.642 2.005L13.258 2.022L13.557 2.035L14.136 2.069L14.689 2.115C19.474 2.579 21.421 4.526 21.885 9.311L21.931 9.864L21.965 10.443C21.97 10.541 21.975 10.641 21.978 10.742L21.995 11.358L22 12L21.995 12.642L21.978 13.258L21.965 13.557L21.931 14.136L21.885 14.689C21.421 19.474 19.474 21.421 14.689 21.885L14.136 21.931L13.557 21.965C13.459 21.97 13.359 21.975 13.258 21.978L12.642 21.995L12 22L11.358 21.995L10.742 21.978L10.443 21.965L9.864 21.931L9.311 21.885C4.526 21.421 2.579 19.474 2.115 14.689L2.069 14.136L2.035 13.557C2.03014 13.4574 2.0258 13.3577 2.022 13.258L2.005 12.642C2.002 12.432 2 12.218 2 12L2.001 11.676L2.005 11.358L2.022 10.742L2.035 10.443L2.069 9.864L2.115 9.311C2.579 4.526 4.526 2.579 9.311 2.115L9.864 2.069L10.443 2.035C10.541 2.03 10.641 2.025 10.742 2.022L11.358 2.005C11.568 2.002 11.782 2 12 2ZM12 8C11.7348 8 11.4804 8.10536 11.2929 8.29289C11.1054 8.48043 11 8.73478 11 9V11H9L8.883 11.007C8.6299 11.0371 8.39785 11.1627 8.23426 11.3582C8.07067 11.5536 7.98789 11.8042 8.00283 12.0586C8.01776 12.313 8.1293 12.5522 8.31463 12.7272C8.49997 12.9021 8.74512 12.9997 9 13H11V15L11.007 15.117C11.0371 15.3701 11.1627 15.6021 11.3582 15.7657C11.5536 15.9293 11.8042 16.0121 12.0586 15.9972C12.313 15.9822 12.5522 15.8707 12.7272 15.6854C12.9021 15.5 12.9997 15.2549 13 15V13H15L15.117 12.993C15.3701 12.9629 15.6021 12.8373 15.7657 12.6418C15.9293 12.4464 16.0121 12.1958 15.9972 11.9414C15.9822 11.687 15.8707 11.4478 15.6854 11.2728C15.5 11.0979 15.2549 11.0003 15 11H13V9L12.993 8.883C12.9643 8.63975 12.8474 8.41547 12.6644 8.25272C12.4813 8.08996 12.2449 8.00003 12 8Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_175_11028">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    profile: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_13488)">
                <path d="M3.75 15C3.75 16.4774 4.04099 17.9403 4.60636 19.3052C5.17172 20.6701 6.00039 21.9103 7.04505 22.955C8.08971 23.9996 9.3299 24.8283 10.6948 25.3936C12.0597 25.959 13.5226 26.25 15 26.25C16.4774 26.25 17.9403 25.959 19.3052 25.3936C20.6701 24.8283 21.9103 23.9996 22.955 22.955C23.9996 21.9103 24.8283 20.6701 25.3936 19.3052C25.959 17.9403 26.25 16.4774 26.25 15C26.25 13.5226 25.959 12.0597 25.3936 10.6948C24.8283 9.3299 23.9996 8.08971 22.955 7.04505C21.9103 6.00039 20.6701 5.17172 19.3052 4.60636C17.9403 4.04099 16.4774 3.75 15 3.75C13.5226 3.75 12.0597 4.04099 10.6948 4.60636C9.3299 5.17172 8.08971 6.00039 7.04505 7.04505C6.00039 8.08971 5.17172 9.3299 4.60636 10.6948C4.04099 12.0597 3.75 13.5226 3.75 15Z" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M11.25 12.5C11.25 13.4946 11.6451 14.4484 12.3483 15.1517C13.0516 15.8549 14.0054 16.25 15 16.25C15.9946 16.25 16.9484 15.8549 17.6517 15.1517C18.3549 14.4484 18.75 13.4946 18.75 12.5C18.75 11.5054 18.3549 10.5516 17.6517 9.84835C16.9484 9.14509 15.9946 8.75 15 8.75C14.0054 8.75 13.0516 9.14509 12.3483 9.84835C11.6451 10.5516 11.25 11.5054 11.25 12.5Z" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.71094 23.5613C8.02032 22.5315 8.6534 21.629 9.51625 20.9875C10.3791 20.346 11.4257 19.9997 12.5009 20H17.5009C18.5775 19.9996 19.6254 20.3467 20.4889 20.9897C21.3524 21.6327 21.9853 22.5372 22.2934 23.5688" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_13488">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    emailChange: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_13491)">
                <path d="M15 23.75H6.25C5.58696 23.75 4.95107 23.4866 4.48223 23.0178C4.01339 22.5489 3.75 21.913 3.75 21.25V8.75C3.75 8.08696 4.01339 7.45107 4.48223 6.98223C4.95107 6.51339 5.58696 6.25 6.25 6.25H23.75C24.413 6.25 25.0489 6.51339 25.5178 6.98223C25.9866 7.45107 26.25 8.08696 26.25 8.75V15" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.75 8.75L15 16.25L26.25 8.75" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.25 23.75C21.25 24.413 21.5134 25.0489 21.9822 25.5178C22.4511 25.9866 23.087 26.25 23.75 26.25C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75C26.25 23.087 25.9866 22.4511 25.5178 21.9822C25.0489 21.5134 24.413 21.25 23.75 21.25C23.087 21.25 22.4511 21.5134 21.9822 21.9822C21.5134 22.4511 21.25 23.087 21.25 23.75Z" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23.75 19.375V21.25" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23.75 26.25V28.125" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.5417 21.5625L25.918 22.5" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.5859 25L19.9609 25.9375" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.9609 21.5625L21.5859 22.5" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.918 25L27.543 25.9375" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_13491">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    passwordChange: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_13494)">
                <path d="M15 26.25H8.75C8.08696 26.25 7.45107 25.9866 6.98223 25.5178C6.51339 25.0489 6.25 24.413 6.25 23.75V16.25C6.25 15.587 6.51339 14.9511 6.98223 14.4822C7.45107 14.0134 8.08696 13.75 8.75 13.75H21.25C21.955 13.75 22.5925 14.0425 23.0462 14.5125" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.75 20C13.75 20.3315 13.8817 20.6495 14.1161 20.8839C14.3505 21.1183 14.6685 21.25 15 21.25C15.3315 21.25 15.6495 21.1183 15.8839 20.8839C16.1183 20.6495 16.25 20.3315 16.25 20C16.25 19.6685 16.1183 19.3505 15.8839 19.1161C15.6495 18.8817 15.3315 18.75 15 18.75C14.6685 18.75 14.3505 18.8817 14.1161 19.1161C13.8817 19.3505 13.75 19.6685 13.75 20Z" stroke="#012C51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 13.75V8.75C10 7.42392 10.5268 6.15215 11.4645 5.21447C12.4021 4.27678 13.6739 3.75 15 3.75C16.3261 3.75 17.5979 4.27678 18.5355 5.21447C19.4732 6.15215 20 7.42392 20 8.75V13.75" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.25 23.75C21.25 24.413 21.5134 25.0489 21.9822 25.5178C22.4511 25.9866 23.087 26.25 23.75 26.25C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75C26.25 23.087 25.9866 22.4511 25.5178 21.9822C25.0489 21.5134 24.413 21.25 23.75 21.25C23.087 21.25 22.4511 21.5134 21.9822 21.9822C21.5134 22.4511 21.25 23.087 21.25 23.75Z" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23.75 19.375V21.25" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M23.75 26.25V28.125" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M27.5417 21.5625L25.918 22.5" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.5859 25L19.9609 25.9375" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M19.9609 21.5625L21.5859 22.5" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M25.918 25L27.543 25.9375" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_13494">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    deactivate: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_13506)">
                <path d="M13.75 8.75H7.5C6.83696 8.75 6.20107 9.01339 5.73223 9.48223C5.26339 9.95107 5 10.587 5 11.25V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H18.75C19.413 25 20.0489 24.7366 20.5178 24.2678C20.9866 23.7989 21.25 23.163 21.25 22.5V16.25" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 17.5L25 5" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M18.75 5H25V11.25" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_13506">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>
    ),
    edit: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_5564)">
                <path d="M5.83398 5.8335H5.00065C4.55862 5.8335 4.1347 6.00909 3.82214 6.32165C3.50958 6.63421 3.33398 7.05814 3.33398 7.50016V15.0002C3.33398 15.4422 3.50958 15.8661 3.82214 16.1787C4.1347 16.4912 4.55862 16.6668 5.00065 16.6668H12.5007C12.9427 16.6668 13.3666 16.4912 13.6792 16.1787C13.9917 15.8661 14.1673 15.4422 14.1673 15.0002V14.1668" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M16.9875 5.48759C17.3157 5.15938 17.5001 4.71424 17.5001 4.25009C17.5001 3.78594 17.3157 3.34079 16.9875 3.01259C16.6593 2.68438 16.2142 2.5 15.75 2.5C15.2858 2.5 14.8407 2.68438 14.5125 3.01259L7.5 10.0001V12.5001H10L16.9875 5.48759Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M13.334 4.1665L15.834 6.6665" stroke="#012C51" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_5564">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    twofactor: (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_177_13503)">
                <path d="M8.75 20H3.75L8.0875 14.175C8.35387 13.8821 8.54691 13.5302 8.65071 13.1482C8.75451 12.7662 8.76612 12.365 8.68457 11.9777C8.60302 11.5903 8.43066 11.2278 8.18165 10.9201C7.93265 10.6124 7.61413 10.3682 7.25231 10.2076C6.89049 10.047 6.49571 9.97466 6.10046 9.99647C5.7052 10.0183 5.32078 10.1336 4.97882 10.333C4.63686 10.5325 4.34714 10.8102 4.13351 11.1435C3.91988 11.4767 3.78843 11.856 3.75 12.25" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 20V10H17.5" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.5 15H16.25" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.25 20V12.5C21.25 11.837 21.5134 11.2011 21.9822 10.7322C22.4511 10.2634 23.087 10 23.75 10C24.413 10 25.0489 10.2634 25.5178 10.7322C25.9866 11.2011 26.25 11.837 26.25 12.5V20" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M21.25 16.25H26.25" stroke="#012C51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_177_13503">
                    <rect width="30" height="30" fill="white" />
                </clipPath>
            </defs>
        </svg>

    ),
    notify:(
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff"><path d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM9 21H15V23H9V21Z"></path></svg>
    )
};

const Icon = ({ type }) => {
    return <>{icons[type]}</>;
};

export default Icon;
