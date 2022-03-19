import * as React from 'react';
import { motion } from 'framer-motion';
import {
  mainPathVariant,
  shapeVariations
} from '@/lib/animations/svgs';

const Six = () => {
  return (
    <motion.div
      className='animationParent'
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <svg width='390' height='160' viewBox='0 0 390 160' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g
          id='frame_5'
          data-name='frame_5'
        >
          <motion.rect {...mainPathVariant} width='390' height='160' transform='translate(1)' fill='white' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M1.09419 154L390.742 11.4899' stroke='#4E4E4E' strokeDasharray='4 4' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M94.9476 119.597L197.209 82.5112L295.94 46.5762' stroke='#252323' strokeWidth='2.5' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M87.0914 120.853C87.0914 118.644 88.8823 116.853 91.0914 116.853C93.3006 116.853 95.0914 118.644 95.0914 120.853C95.0914 123.062 93.3006 124.853 91.0914 124.853C88.8823 124.853 87.0914 123.062 87.0914 120.853Z' fill='#CADEFC' stroke='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.circle cx='299.094' cy='45' r='4' transform='rotate(-180 299.094 45)' fill='#CADEFC' stroke='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M91 120.335C90.6327 120.335 90.335 120.633 90.335 121C90.335 121.367 90.6327 121.665 91 121.665V120.335ZM123.47 121.47C123.73 121.211 123.73 120.789 123.47 120.53L119.238 116.298C118.978 116.038 118.557 116.038 118.298 116.298C118.038 116.557 118.038 116.978 118.298 117.238L122.06 121L118.298 124.762C118.038 125.022 118.038 125.443 118.298 125.702C118.557 125.962 118.978 125.962 119.238 125.702L123.47 121.47ZM91 121.665H123V120.335H91V121.665Z' fill='#1686D8' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M90.335 121C90.335 121.367 90.6327 121.665 91 121.665C91.3673 121.665 91.665 121.367 91.665 121H90.335ZM91.4702 88.5298C91.2105 88.2701 90.7895 88.2701 90.5298 88.5298L86.2977 92.7618C86.038 93.0215 86.038 93.4426 86.2977 93.7023C86.5574 93.962 86.9785 93.962 87.2382 93.7023L91 89.9405L94.7618 93.7023C95.0215 93.962 95.4426 93.962 95.7023 93.7023C95.962 93.4426 95.962 93.0215 95.7023 92.7618L91.4702 88.5298ZM91.665 121L91.665 89H90.335L90.335 121H91.665Z' fill='#1686D8' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M299 44.335C298.633 44.335 298.335 44.6327 298.335 45C298.335 45.3673 298.633 45.665 299 45.665V44.335ZM331.47 45.4702C331.73 45.2105 331.73 44.7895 331.47 44.5298L327.238 40.2977C326.978 40.038 326.557 40.038 326.298 40.2977C326.038 40.5574 326.038 40.9785 326.298 41.2382L330.06 45L326.298 48.7618C326.038 49.0215 326.038 49.4426 326.298 49.7023C326.557 49.962 326.978 49.962 327.238 49.7023L331.47 45.4702ZM299 45.665H331V44.335H299V45.665Z' fill='#1686D8' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M298.335 45C298.335 45.3673 298.633 45.665 299 45.665C299.367 45.665 299.665 45.3673 299.665 45H298.335ZM299.47 12.5298C299.211 12.2701 298.789 12.2701 298.53 12.5298L294.298 16.7618C294.038 17.0215 294.038 17.4426 294.298 17.7023C294.557 17.962 294.978 17.962 295.238 17.7023L299 13.9405L302.762 17.7023C303.022 17.962 303.443 17.962 303.702 17.7023C303.962 17.4426 303.962 17.0215 303.702 16.7618L299.47 12.5298ZM299.665 45V13H298.335V45H299.665Z' fill='#1686D8' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M68.8464 86.2749C68.8464 85.9376 68.7278 85.769 68.4906 85.769C68.191 85.769 67.8789 85.9646 67.5543 86.3558C67.2297 86.7471 66.9613 87.3474 66.749 88.1568C66.7366 88.1703 66.7241 88.1906 66.7116 88.2175C66.6991 88.2445 66.6929 88.2648 66.6929 88.2783C66.6929 88.2917 66.6804 88.3052 66.6554 88.3187C66.6304 88.3322 66.6117 88.339 66.5992 88.339C66.5868 88.339 66.5618 88.339 66.5243 88.339C66.4869 88.339 66.4369 88.339 66.3745 88.339H66.1124C66.0375 88.258 66 88.1973 66 88.1568C66 88.0624 66.0499 87.8668 66.1498 87.57C66.2497 87.2732 66.3995 86.9224 66.5992 86.5177C66.799 86.113 67.0736 85.769 67.4232 85.4857C67.7727 85.2024 68.166 85.054 68.6029 85.0405C69.1273 85.0405 69.533 85.2024 69.8201 85.5261C70.1073 85.8499 70.2571 86.2277 70.2696 86.6594C70.2696 86.8887 70.2509 87.0641 70.2134 87.1855C70.2134 87.2664 70.1198 87.5632 69.9325 88.0759C69.7452 88.5885 69.5517 89.1889 69.352 89.8769C69.1522 90.5649 69.0399 91.1653 69.0149 91.6779C69.0149 92.0422 69.0461 92.339 69.1086 92.5683C69.2708 93.1484 69.6641 93.4385 70.2883 93.4385C70.7502 93.4385 71.1809 93.2091 71.5804 92.7504C71.9799 92.2917 72.292 91.7589 72.5167 91.1518C72.7414 90.5447 72.9225 89.9848 73.0598 89.4722C73.1971 88.9595 73.2658 88.5885 73.2658 88.3592C73.2658 88.0489 73.2158 87.7791 73.116 87.5498C73.0161 87.3204 72.9037 87.145 72.7789 87.0236C72.654 86.9022 72.5417 86.7808 72.4418 86.6594C72.3419 86.5379 72.292 86.3895 72.292 86.2142C72.292 85.9174 72.4106 85.6408 72.6478 85.3845C72.885 85.1282 73.1409 85 73.4156 85C73.6528 85 73.865 85.1214 74.0523 85.3643C74.2395 85.6071 74.3394 85.9983 74.3519 86.5379C74.3519 86.9022 74.277 87.4621 74.1272 88.2175C73.9774 88.973 73.7464 89.8162 73.4343 90.7471C73.1222 91.6779 72.679 92.4806 72.1047 93.1552C71.5305 93.8297 70.8688 94.1737 70.1198 94.1872C69.3208 94.1872 68.6841 93.9646 68.2097 93.5194C67.7478 93.0877 67.5168 92.4469 67.5168 91.597C67.5168 91.1788 67.5668 90.7471 67.6666 90.3019C67.7665 89.8567 68.0224 89.0675 68.4344 87.9342C68.7091 87.0708 68.8464 86.5177 68.8464 86.2749Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M77.509 88.7306L77.3369 88.8021C77.2133 88.8498 77.0368 88.8975 76.8073 88.9452C76.5778 88.9929 76.3218 89.0263 76.0394 89.0454H75.7878V88.3872H76.0394C76.4542 88.3682 76.8382 88.2966 77.1912 88.1726C77.5443 88.0486 77.7914 87.9342 77.9326 87.8293C78.0738 87.7244 78.1974 87.6194 78.3033 87.5145C78.321 87.4859 78.3739 87.4716 78.4622 87.4716C78.5416 87.4716 78.6167 87.5002 78.6873 87.5574V91.8352L78.7005 96.1273C78.7623 96.194 78.8153 96.237 78.8594 96.256C78.9035 96.2751 79.0094 96.2942 79.1771 96.3133C79.3448 96.3323 79.6184 96.3419 79.998 96.3419H80.3422V97H80.1966C80.0112 96.9714 79.3095 96.9571 78.0915 96.9571C76.8911 96.9571 76.1983 96.9714 76.0129 97H75.854V96.3419H76.1983C76.3924 96.3419 76.5601 96.3419 76.7014 96.3419C76.8426 96.3419 76.9529 96.3371 77.0323 96.3276C77.1118 96.318 77.1824 96.3037 77.2442 96.2847C77.306 96.2656 77.3413 96.256 77.3501 96.256C77.3589 96.256 77.3854 96.2322 77.4295 96.1845C77.4737 96.1368 77.5001 96.1177 77.509 96.1273V88.7306Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M275.846 10.2749C275.846 9.93762 275.728 9.76898 275.491 9.76898C275.191 9.76898 274.879 9.9646 274.554 10.3558C274.23 10.7471 273.961 11.3474 273.749 12.1568C273.737 12.1703 273.724 12.1906 273.712 12.2175C273.699 12.2445 273.693 12.2648 273.693 12.2783C273.693 12.2917 273.68 12.3052 273.655 12.3187C273.63 12.3322 273.612 12.339 273.599 12.339C273.587 12.339 273.562 12.339 273.524 12.339C273.487 12.339 273.437 12.339 273.375 12.339H273.112C273.037 12.258 273 12.1973 273 12.1568C273 12.0624 273.05 11.8668 273.15 11.57C273.25 11.2732 273.399 10.9224 273.599 10.5177C273.799 10.113 274.074 9.76898 274.423 9.48568C274.773 9.20237 275.166 9.05397 275.603 9.04048C276.127 9.04048 276.533 9.20237 276.82 9.52615C277.107 9.84993 277.257 10.2277 277.27 10.6594C277.27 10.8887 277.251 11.0641 277.213 11.1855C277.213 11.2665 277.12 11.5632 276.932 12.0759C276.745 12.5885 276.552 13.1889 276.352 13.8769C276.152 14.5649 276.04 15.1653 276.015 15.6779C276.015 16.0422 276.046 16.339 276.109 16.5683C276.271 17.1484 276.664 17.4385 277.288 17.4385C277.75 17.4385 278.181 17.2091 278.58 16.7504C278.98 16.2917 279.292 15.7589 279.517 15.1518C279.741 14.5447 279.922 13.9848 280.06 13.4722C280.197 12.9595 280.266 12.5885 280.266 12.3592C280.266 12.0489 280.216 11.7791 280.116 11.5498C280.016 11.3204 279.904 11.145 279.779 11.0236C279.654 10.9022 279.542 10.7808 279.442 10.6594C279.342 10.538 279.292 10.3896 279.292 10.2142C279.292 9.91738 279.411 9.64082 279.648 9.3845C279.885 9.12817 280.141 9.00001 280.416 9.00001C280.653 9.00001 280.865 9.12143 281.052 9.36426C281.24 9.60709 281.339 9.99833 281.352 10.538C281.352 10.9022 281.277 11.4621 281.127 12.2175C280.977 12.973 280.746 13.8162 280.434 14.7471C280.122 15.6779 279.679 16.4806 279.105 17.1552C278.53 17.8297 277.869 18.1737 277.12 18.1872C276.321 18.1872 275.684 17.9646 275.21 17.5194C274.748 17.0877 274.517 16.4469 274.517 15.597C274.517 15.1788 274.567 14.7471 274.667 14.3019C274.767 13.8567 275.022 13.0675 275.434 11.9342C275.709 11.0708 275.846 10.5177 275.846 10.2749Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M283.132 14.8623C282.894 14.8623 282.704 14.7765 282.563 14.6048C282.422 14.4331 282.351 14.2233 282.351 13.9753C282.351 13.2981 282.585 12.7115 283.053 12.2156C283.52 11.7196 284.103 11.4716 284.8 11.4716C285.603 11.4716 286.274 11.7387 286.813 12.2728C287.351 12.8069 287.625 13.4984 287.633 14.3473C287.633 14.7574 287.545 15.1485 287.369 15.5205C287.192 15.8924 286.98 16.2167 286.733 16.4933C286.486 16.7699 286.133 17.1228 285.674 17.552C285.356 17.8477 284.915 18.2865 284.35 18.8683L283.569 19.6695L284.575 19.6838C285.961 19.6838 286.698 19.6599 286.786 19.6122C286.848 19.5932 286.954 19.1687 287.104 18.3389V18.296H287.633V18.3389C287.625 18.3675 287.567 18.8015 287.461 19.6408C287.355 20.4802 287.289 20.9189 287.263 20.9571V21H282.351V20.7282V20.5565C282.351 20.4897 282.377 20.4182 282.43 20.3419C282.483 20.2656 282.616 20.0987 282.828 19.8411C283.084 19.5359 283.304 19.2689 283.49 19.04C283.569 18.9446 283.719 18.7681 283.94 18.5106C284.16 18.2531 284.31 18.0766 284.39 17.9812C284.469 17.8859 284.597 17.7285 284.774 17.5091C284.95 17.2897 285.074 17.1276 285.144 17.0227C285.215 16.9178 285.317 16.7747 285.449 16.5935C285.581 16.4122 285.674 16.2596 285.727 16.1356C285.78 16.0117 285.846 15.8734 285.926 15.7207C286.005 15.5681 286.062 15.4155 286.098 15.2629C286.133 15.1103 286.164 14.9673 286.19 14.8337C286.217 14.7002 286.23 14.5428 286.23 14.3616C286.23 13.7607 286.08 13.2409 285.78 12.8021C285.48 12.3634 285.052 12.144 284.496 12.144C284.204 12.144 283.949 12.2251 283.728 12.3872C283.507 12.5494 283.353 12.7068 283.264 12.8594C283.176 13.012 283.132 13.1026 283.132 13.1312C283.132 13.1407 283.154 13.1455 283.198 13.1455C283.357 13.1455 283.52 13.2123 283.688 13.3458C283.856 13.4793 283.94 13.6987 283.94 14.0039C283.94 14.2424 283.869 14.4427 283.728 14.6048C283.587 14.767 283.388 14.8528 283.132 14.8623Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M113 135.142C113 135.034 113.056 134.824 113.169 134.513C113.281 134.203 113.438 133.851 113.638 133.459C113.838 133.068 114.113 132.73 114.463 132.446C114.813 132.162 115.182 132.013 115.57 132C116.145 132 116.576 132.169 116.864 132.507C117.152 132.845 117.296 133.243 117.296 133.703C117.296 133.946 117.083 134.703 116.658 135.973C116.233 137.243 116.02 138.196 116.02 138.831C116.02 139.412 116.108 139.818 116.283 140.047C116.458 140.277 116.72 140.399 117.07 140.412C117.421 140.426 117.752 140.311 118.065 140.068C118.377 139.824 118.609 139.595 118.759 139.378L118.965 139.034C118.99 138.98 119.228 137.953 119.678 135.953C120.053 134.331 120.278 133.385 120.353 133.115C120.428 132.845 120.516 132.649 120.616 132.527C120.828 132.324 121.053 132.223 121.291 132.223C121.504 132.223 121.66 132.291 121.76 132.426C121.86 132.561 121.91 132.689 121.91 132.811L120.484 139.257C120.472 139.324 120.466 139.432 120.466 139.581C120.466 139.919 120.509 140.142 120.597 140.25C120.684 140.358 120.816 140.419 120.991 140.432C121.266 140.392 121.485 140.182 121.647 139.804C121.81 139.426 121.998 138.831 122.21 138.02C122.235 137.912 122.36 137.858 122.585 137.858C122.823 137.858 122.942 137.919 122.942 138.041C122.929 138.108 122.917 138.203 122.904 138.324C122.892 138.446 122.835 138.662 122.735 138.973C122.635 139.284 122.529 139.574 122.416 139.845C122.304 140.115 122.148 140.372 121.947 140.615C121.747 140.858 121.522 141.027 121.272 141.122C121.172 141.149 121.022 141.162 120.822 141.162C119.997 141.162 119.428 140.784 119.115 140.027C119.09 140.041 119.021 140.108 118.909 140.23C118.796 140.351 118.684 140.453 118.571 140.534C118.459 140.615 118.321 140.716 118.158 140.838C117.996 140.959 117.815 141.041 117.614 141.081C117.414 141.122 117.202 141.155 116.977 141.182C116.426 141.182 115.939 141.061 115.514 140.818C114.863 140.399 114.538 139.682 114.538 138.669C114.538 137.899 114.757 136.892 115.195 135.649C115.632 134.405 115.851 133.615 115.851 133.277C115.851 133.263 115.851 133.25 115.851 133.236C115.851 133.115 115.851 133.034 115.851 132.993C115.851 132.953 115.826 132.905 115.776 132.851C115.726 132.797 115.657 132.77 115.57 132.77H115.495C115.207 132.77 114.945 132.899 114.707 133.155C114.469 133.412 114.282 133.689 114.144 133.986C114.007 134.284 113.9 134.568 113.825 134.838C113.75 135.108 113.7 135.257 113.675 135.284C113.65 135.311 113.55 135.324 113.375 135.324H113.113C113.038 135.243 113 135.182 113 135.142Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M126.16 135.717L125.988 135.788C125.864 135.836 125.687 135.884 125.457 135.932C125.228 135.979 124.971 136.013 124.688 136.032H124.436V135.373H124.688C125.104 135.354 125.488 135.282 125.842 135.158C126.196 135.034 126.443 134.919 126.585 134.814C126.726 134.709 126.85 134.604 126.956 134.498C126.974 134.47 127.027 134.455 127.115 134.455C127.195 134.455 127.27 134.484 127.341 134.541V138.826L127.354 143.126C127.416 143.193 127.469 143.236 127.513 143.255C127.557 143.274 127.663 143.293 127.831 143.312C127.999 143.331 128.273 143.341 128.654 143.341H128.998V144H128.852C128.667 143.971 127.964 143.957 126.744 143.957C125.541 143.957 124.847 143.971 124.662 144H124.503V143.341H124.847C125.042 143.341 125.21 143.341 125.351 143.341C125.493 143.341 125.603 143.336 125.683 143.326C125.762 143.317 125.833 143.303 125.895 143.283C125.957 143.264 125.992 143.255 126.001 143.255C126.01 143.255 126.037 143.231 126.081 143.183C126.125 143.135 126.151 143.116 126.16 143.126V135.717Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M320 58.1419C320 58.0338 320.056 57.8243 320.169 57.5135C320.281 57.2027 320.438 56.8514 320.638 56.4595C320.838 56.0676 321.113 55.7297 321.463 55.4459C321.813 55.1622 322.182 55.0135 322.57 55C323.145 55 323.576 55.1689 323.864 55.5068C324.152 55.8446 324.296 56.2432 324.296 56.7027C324.296 56.9459 324.083 57.7027 323.658 58.973C323.233 60.2432 323.02 61.1959 323.02 61.8311C323.02 62.4122 323.108 62.8176 323.283 63.0473C323.458 63.277 323.72 63.3987 324.07 63.4122C324.421 63.4257 324.752 63.3108 325.065 63.0676C325.377 62.8243 325.609 62.5946 325.759 62.3784L325.965 62.0338C325.99 61.9797 326.228 60.9527 326.678 58.9527C327.053 57.3311 327.278 56.3851 327.353 56.1149C327.428 55.8446 327.516 55.6487 327.616 55.527C327.828 55.3243 328.053 55.223 328.291 55.223C328.504 55.223 328.66 55.2905 328.76 55.4257C328.86 55.5608 328.91 55.6892 328.91 55.8108L327.484 62.2568C327.472 62.3243 327.466 62.4324 327.466 62.5811C327.466 62.9189 327.509 63.1419 327.597 63.25C327.684 63.3581 327.816 63.4189 327.991 63.4324C328.266 63.3919 328.485 63.1824 328.647 62.8041C328.81 62.4257 328.997 61.8311 329.21 61.0203C329.235 60.9122 329.36 60.8581 329.585 60.8581C329.823 60.8581 329.942 60.9189 329.942 61.0405C329.929 61.1081 329.917 61.2027 329.904 61.3243C329.892 61.4459 329.835 61.6622 329.735 61.973C329.635 62.2838 329.529 62.5743 329.416 62.8446C329.304 63.1149 329.148 63.3716 328.947 63.6149C328.747 63.8581 328.522 64.027 328.272 64.1216C328.172 64.1487 328.022 64.1622 327.822 64.1622C326.997 64.1622 326.428 63.7838 326.115 63.027C326.09 63.0405 326.021 63.1081 325.909 63.2297C325.796 63.3514 325.684 63.4527 325.571 63.5338C325.459 63.6149 325.321 63.7162 325.158 63.8378C324.996 63.9595 324.815 64.0405 324.614 64.0811C324.414 64.1216 324.202 64.1554 323.977 64.1824C323.426 64.1824 322.939 64.0608 322.514 63.8176C321.863 63.3987 321.538 62.6824 321.538 61.6689C321.538 60.8987 321.757 59.8919 322.195 58.6487C322.632 57.4054 322.851 56.6149 322.851 56.277C322.851 56.2635 322.851 56.25 322.851 56.2365C322.851 56.1149 322.851 56.0338 322.851 55.9932C322.851 55.9527 322.826 55.9054 322.776 55.8514C322.726 55.7973 322.657 55.7703 322.57 55.7703H322.495C322.207 55.7703 321.945 55.8987 321.707 56.1554C321.469 56.4122 321.282 56.6892 321.144 56.9865C321.007 57.2838 320.9 57.5676 320.825 57.8378C320.75 58.1081 320.7 58.2568 320.675 58.2838C320.65 58.3108 320.55 58.3243 320.375 58.3243H320.113C320.038 58.2432 320 58.1824 320 58.1419Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M331.781 60.852C331.542 60.852 331.352 60.766 331.211 60.594C331.069 60.422 330.999 60.2118 330.999 59.9634C330.999 59.2851 331.233 58.6975 331.701 58.2007C332.17 57.7039 332.754 57.4555 333.452 57.4555C334.257 57.4555 334.928 57.723 335.468 58.258C336.007 58.7931 336.281 59.4857 336.29 60.336C336.29 60.7469 336.202 61.1386 336.025 61.5112C335.848 61.8838 335.636 62.2086 335.388 62.4857C335.141 62.7628 334.787 63.1163 334.327 63.5462C334.009 63.8424 333.567 64.2819 333.001 64.8647L332.219 65.6672L333.227 65.6815C334.615 65.6815 335.353 65.6577 335.441 65.6099C335.503 65.5908 335.609 65.1656 335.76 64.3344V64.2914H336.29V64.3344C336.281 64.3631 336.224 64.7978 336.118 65.6385C336.012 66.4793 335.945 66.9188 335.919 66.957V67H330.999V66.7277V66.5557C330.999 66.4889 331.025 66.4172 331.078 66.3408C331.131 66.2643 331.264 66.0971 331.476 65.8392C331.732 65.5335 331.953 65.2659 332.139 65.0366C332.219 64.9411 332.369 64.7644 332.59 64.5064C332.811 64.2484 332.961 64.0717 333.041 63.9761C333.12 63.8806 333.249 63.723 333.425 63.5032C333.602 63.2835 333.726 63.1211 333.797 63.016C333.868 62.9109 333.969 62.7676 334.102 62.586C334.234 62.4045 334.327 62.2516 334.38 62.1274C334.433 62.0032 334.5 61.8647 334.579 61.7118C334.659 61.559 334.716 61.4061 334.752 61.2532C334.787 61.1004 334.818 60.9571 334.844 60.8233C334.871 60.6895 334.884 60.5319 334.884 60.3504C334.884 59.7485 334.734 59.2278 334.433 58.7883C334.133 58.3488 333.704 58.1291 333.147 58.1291C332.855 58.1291 332.599 58.2103 332.378 58.3727C332.157 58.5351 332.002 58.6927 331.914 58.8456C331.825 58.9985 331.781 59.0892 331.781 59.1179C331.781 59.1275 331.803 59.1322 331.847 59.1322C332.006 59.1322 332.17 59.1991 332.338 59.3329C332.506 59.4666 332.59 59.6864 332.59 59.9921C332.59 60.231 332.519 60.4316 332.378 60.594C332.236 60.7564 332.037 60.8424 331.781 60.852Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M177.5 121C177.5 121.276 177.724 121.5 178 121.5C178.276 121.5 178.5 121.276 178.5 121H177.5ZM171.169 93.5296C170.91 93.436 170.623 93.5708 170.53 93.8306L169.005 98.0646C168.912 98.3245 169.047 98.6109 169.306 98.7044C169.566 98.798 169.853 98.6632 169.946 98.4034L171.301 94.6398L175.065 95.9947C175.324 96.0882 175.611 95.9534 175.704 95.6936C175.798 95.4338 175.663 95.1473 175.403 95.0538L171.169 93.5296ZM178.5 121C178.5 112.97 177.747 108.285 176.474 104.527C175.838 102.651 175.076 101.018 174.228 99.3302C173.377 97.6358 172.449 95.905 171.452 93.7871L170.548 94.2129C171.551 96.345 172.498 98.1142 173.334 99.7791C174.174 101.451 174.912 103.036 175.526 104.848C176.753 108.465 177.5 113.03 177.5 121H178.5Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M138 121H218' stroke='#B8B8B8' strokeWidth='2' strokeLinecap='round' strokeDasharray='5 5' {...shapeVariations} animate='visible' initial='hidden' />
          <motion.path d='M185 109.476C185 108.334 185.202 107.131 185.606 105.867C186.01 104.603 186.558 103.512 187.252 102.594C187.946 101.677 188.665 101.151 189.411 101.017C189.421 101.017 189.463 101.017 189.535 101.017C189.608 101.017 189.67 101.011 189.721 101C190.281 101.045 190.715 101.319 191.026 101.822C191.43 102.494 191.632 103.394 191.632 104.524C191.632 105.811 191.399 107.12 190.933 108.452C190.467 109.783 189.872 110.874 189.147 111.724C188.422 112.575 187.728 113 187.066 113H186.957C186.584 113 186.263 112.888 185.994 112.664C185.725 112.441 185.523 112.144 185.388 111.775C185.254 111.406 185.155 111.031 185.093 110.65C185.031 110.27 185 109.878 185 109.476ZM190.405 103.333C190.405 102.192 190.13 101.621 189.582 101.621C189.209 101.621 188.846 101.873 188.494 102.376C188.142 102.88 187.853 103.45 187.625 104.088C187.397 104.726 187.221 105.285 187.097 105.766C186.972 106.248 186.905 106.527 186.895 106.606C187.402 106.617 187.904 106.622 188.401 106.622L189.908 106.606C189.918 106.594 189.96 106.41 190.032 106.052C190.105 105.694 190.187 105.246 190.281 104.709C190.374 104.172 190.415 103.713 190.405 103.333ZM186.211 110.617C186.211 111.803 186.486 112.396 187.035 112.396C187.19 112.396 187.356 112.34 187.532 112.228C187.708 112.116 187.92 111.903 188.168 111.59C188.417 111.277 188.665 110.79 188.914 110.13C189.162 109.47 189.411 108.653 189.659 107.68L189.737 107.394H186.708C186.708 107.428 186.662 107.641 186.569 108.032C186.475 108.424 186.393 108.86 186.32 109.341C186.248 109.822 186.211 110.248 186.211 110.617Z' fill='#252323' {...shapeVariations} animate='visible' initial='hidden' />
        </g>
      </svg>
    </motion.div>
  )
};

export default Six;
