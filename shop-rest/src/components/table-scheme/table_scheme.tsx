import React from 'react';
import Link from 'next/link';
import { AddItemToCart } from 'components/add-item-to-cart';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Box } from 'components/box';
import { ReactSVG } from 'react-svg'

const Card = styled.div({
  backgroundColor: '#fff',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 6,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  border: '0',
  cursor: 'pointer',
  transition: '0.25s ease-in-out',
  '&:hover': {
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)',
    transform: 'translateY(-5px)',
  },
});
const ImageWrapper = styled.div(
  css({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    height: ['190px', '210px'],

    img: {
      display: 'block',
      maxHeight: '100%',
      maxWidth: '100%',
      width: 'auto',
      height: 'auto',
    },
  })
);
const Discount = styled.div<any>(
  css({
    position: 'absolute',
    zIndex: 1,
    top: '10px',
    left: '10px',
    backgroundColor: 'primary.regular',
    color: '#fff',
    overflow: 'hidden',
    padding: '0.25rem 0.5rem',
    fontSize: 12,
    borderRadius: 6,
    pointerEvents: 'none',
  })
);

const CounterWrapper = styled.div<any>(
  css({
    position: 'absolute',
    zIndex: 1,
    top: '10px',
    right: '10px',
  })
);

const PriceWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 10,
});

const Price = styled.span(
  css({
    display: 'block',
    color: 'text.bold',
    fontSize: 16,
    fontWeight: 'semiBold',
  })
);

const SalePrice = styled.span(
  css({
    color: 'text.regular',
    fontSize: 13,
    lineHeight: 1,
    fontWeight: 'regular',
    padding: '0 5px',
    overflow: 'hidden',
    position: 'relative',
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',

    ':before': {
      content: '""',
      width: '100%',
      height: 1,
      display: 'inline-block',
      backgroundColor: 'text.regular',
      position: 'absolute',
      top: '50%',
      left: 0,
    },
  })
);

const Title = styled.h2(
  css({
    color: 'text.regular',
    fontSize: 'sm',
    fontWeight: 'regular',
  })
);

interface Props {
  data: any;
}

export const TableScheme = ({ data }: Props) => {
  const { title, image, price, salePrice, slug, discountInPercent } = data;
  return (
      <div style={{marginTop:100}}>
          <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">


                      <Link href="/grocery-two">
                          <a>
              <g id="table_1">
                  <rect className="tables" rx="20" id="svg_1" height="70" width="51" y="34" x="284" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(45, 274.947, 49.9453)" id="svg_3"
                        d="m264.4479,60.78006l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(45, 274.28, 85.9339)" id="svg_4"
                        d="m263.78144,96.76867l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-135, 345.423, 50.2785)" id="svg_5"
                        d="m334.92417,61.11328l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-135, 344.756, 86.2671)" id="svg_6"
                        d="m334.25771,97.1019l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000" fill="#cccccc"/>
              </g>
                          </a>
                      </Link>
              <Link href="/grocery-two">
                  <a>
              <g id="table_2">
                  <rect className="tables" rx="20" id="svg_7" height="70" width="51" y="125.02332" x="283.49987"
                        stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(45, 274.447, 140.969)" id="svg_8"
                        d="m263.94777,151.80338l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(45, 273.78, 176.957)" id="svg_9"
                        d="m263.28131,187.79199l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-135, 371.256, 116.29)" id="svg_10"
                        d="m361.424,91.13669l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(-135, 344.256, 177.29)" id="svg_11"
                        d="m333.75758,188.12522l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>
                  </a>
              </Link>
              <Link href="/grocery-two">
                  <a>
              <g id="table_3">
                  <rect className="tables" rx="20" id="svg_12" height="70" width="51" y="33" x="401.00011" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(45, 391.947, 48.9453)" id="svg_13"
                        d="m381.44801,59.78006l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(45, 391.28, 84.9339)" id="svg_14"
                        d="m380.78156,95.76867l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-135, 462.423, 49.2785)" id="svg_15"
                        d="m451.92428,60.11328l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-135, 461.756, 85.2671)" id="svg_16"
                        d="m451.25783,96.1019l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000" fill="#cccccc"/>
              </g>
                  </a>
              </Link>
              <Link href="/grocery-two">
                  <a>
              <g id="table_4">
                  <rect className="tables" rx="20" id="svg_17" height="70" width="51" y="124.02332" x="400.49999"
                        stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(45, 391.447, 139.969)" id="svg_18"
                        d="m380.94788,150.80338l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(45, 390.78, 175.957)" id="svg_19"
                        d="m380.28143,186.79199l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-135, 461.923, 140.302)" id="svg_20"
                        d="m451.42415,151.13661l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-135, 461.256, 176.29)" id="svg_21"
                        d="m450.7577,187.12522l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>
                  </a>
              </Link>
              <g id="table_5">
                  <rect className="tables" transform="rotate(-90, 433.502, 286)" rx="20" id="svg_22" height="70"
                        width="51" y="251.00036" x="408.00217" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(135.067, 412.758, 252.791)" id="svg_27"
                        d="m402.25971,263.62544l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(133.157, 451.258, 252.29)" id="svg_28"
                        d="m440.75973,263.12543l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 413.191, 318.394)" id="svg_30"
                        d="m403.69126,327.89442l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 452.191, 319.894)" id="svg_31"
                        d="m442.69121,329.39442l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>
              <g id="table_6">
                  <rect className="tables" transform="rotate(-90, 434.502, 401.006)" rx="20" id="svg_32" height="70"
                        width="51" y="366.00668" x="409.00223" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(135.067, 413.758, 367.797)" id="svg_33"
                        d="m403.25976,378.63176l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(133.157, 452.258, 367.296)" id="svg_34"
                        d="m441.75979,378.13175l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 414.191, 433.4)" id="svg_35"
                        d="m404.69131,442.90074l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 453.191, 434.9)" id="svg_36"
                        d="m443.69126,444.40074l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>
              <g id="table_7">
                  <rect className="tables" transform="rotate(-90, 331.496, 286)" rx="20" id="svg_37" height="70"
                        width="51" y="251.00036" x="305.99657" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(135.067, 310.752, 252.791)" id="svg_38"
                        d="m300.2541,263.62544l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(133.157, 349.252, 252.29)" id="svg_39"
                        d="m338.75412,263.12543l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 311.185, 318.394)" id="svg_40"
                        d="m301.68565,327.89442l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 350.185, 319.894)" id="svg_41"
                        d="m340.6856,329.39442l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>
              <g id="table_8">
                  <rect className="tables" transform="rotate(-90, 332.496, 401.006)" rx="20" id="svg_42" height="70"
                        width="51" y="366.00668" x="306.99662" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(135.067, 311.752, 367.797)" id="svg_43"
                        d="m301.25415,378.63176l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(133.157, 350.252, 367.296)" id="svg_44"
                        d="m339.75418,378.13175l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 312.185, 433.4)" id="svg_45"
                        d="m302.68571,442.90074l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 351.185, 434.9)" id="svg_46"
                        d="m341.68566,444.40074l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>
              <g id="table_9">
                  <rect className="tables" transform="rotate(-90, 167.488, 279)" rx="20" id="svg_47" height="70"
                        width="51" y="243.99998" x="141.98756" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(135.067, 146.743, 245.791)" id="svg_48"
                        d="m136.24509,256.62505l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(133.157, 185.243, 245.29)" id="svg_49"
                        d="m174.74512,256.12505l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 147.176, 311.394)" id="svg_50"
                        d="m137.67664,320.89404l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 186.176, 312.894)" id="svg_51"
                        d="m176.6766,322.39404l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>
              <g id="table_10">
                  <rect className="tables" transform="rotate(-90, 168.487, 394.006)" rx="20" id="svg_52" height="70"
                        width="51" y="359.00629" x="142.98761" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(135.067, 147.743, 360.797)" id="svg_53"
                        d="m137.24515,371.63137l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(133.157, 186.243, 360.296)" id="svg_54"
                        d="m175.74517,371.13137l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 148.176, 426.4)" id="svg_55"
                        d="m138.6767,435.90036l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 187.176, 427.9)" id="svg_56"
                        d="m177.67665,437.40036l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>
              <g id="table_11">
                  <rect className="tables" transform="rotate(-90, 66.4818, 280)" rx="20" id="svg_57" height="70"
                        width="51" y="245.00003" x="40.98199" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(135.067, 45.7378, 246.791)" id="svg_58"
                        d="m35.23953,257.62511l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(133.157, 84.2378, 246.29)" id="svg_59"
                        d="m73.73955,257.1251l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 46.1708, 312.394)" id="svg_60"
                        d="m36.67108,321.89409l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 85.1708, 313.894)" id="svg_61"
                        d="m75.67103,323.39409l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>
              <g id="table_12">
                  <rect className="tables" transform="rotate(-90, 67.4818, 395.006)" rx="20" id="svg_62" height="70"
                        width="51" y="360.00635" x="41.98205" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(135.067, 46.7378, 361.797)" id="svg_63"
                        d="m36.23958,372.63143l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(133.157, 85.2378, 361.296)" id="svg_64"
                        d="m74.73961,372.13142l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 47.1708, 427.4)" id="svg_65"
                        d="m37.67113,436.90041l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 86.1708, 428.9)" id="svg_66"
                        d="m76.67108,438.40041l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>
              <g id="table_13">
                  <rect className="tables" transform="rotate(-90, 256.992, 284.999)" rx="20" id="svg_67"
                        height="40.9984" width="51" y="264.50021" x="231.49228" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(133.157, 255.247, 250.29)" id="svg_69"
                        d="m244.74896,261.12532l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 256.18, 317.894)" id="svg_71"
                        d="m246.68044,327.39431l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>
              <g id="table_14">
                  <rect className="tables" transform="rotate(-90, 256.492, 399.005)" rx="20" id="svg_72"
                        height="43.99857" width="51" y="377.00613" x="230.9925" stroke="#000" fill="#cccccc"/>
                  <path transform="rotate(133.157, 256.247, 365.296)" id="svg_74"
                        d="m245.74902,376.13164l0,-21.66962l20.99749,21.66962l-20.99749,0z" stroke="#000"
                        fill="#cccccc"/>
                  <path transform="rotate(-44.5938, 257.18, 432.9)" id="svg_76"
                        d="m247.68049,442.40063l0,-18.99997l18.99997,18.99997l-18.99997,0z" stroke="#000"
                        fill="#cccccc"/>
              </g>

              <g>
                  <line id="svg_79" y2="186.02395" x2="213.99804" y1="185.02389" x1="2.98645" stroke="#000"
                        fill="none"/>
                  <line id="svg_80" y2="182.02373" x2="219.99837" y1="1.01378" x1="219.99837" stroke="#000"
                        fill="none"/>
                  <text transform="matrix(1.63588, 0, 0, 1.63588, -41.1288, -47.546)" font-style="normal"
                        font-weight="normal"  text-anchor="start" font-family="'Montserrat'"
                        font-size="24" stroke-width="0" id="svg_81" y="98.01911" x="64.98985" stroke="#000"
                        fill="#000000">WC</text>
              </g>
          </svg>
      </div>

  );
};
