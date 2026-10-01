import styled from 'styled-components'
import { colors } from '../../styles'
export const Card=styled.article`display:flex;flex-direction:column;min-height:440px;padding:8px;background:${colors.salmon};color:${colors.cream};`
export const DishImage=styled.img`width:100%;height:167px;object-fit:cover;`
export const DishTitle=styled.h2`margin-top:8px;font-size:16px;font-weight:900;`
export const DishDescription=styled.p`margin-top:8px;font-size:14px;line-height:1.45;`
export const DishPrice=styled.strong`display:block;margin-top:10px;font-size:14px;`
export const AddButton=styled.button`width:100%;min-height:36px;margin-top:auto;border:0;background:${colors.softCream};color:${colors.salmon};font-size:14px;font-weight:700;cursor:pointer;&:hover{filter:brightness(.97);}`
