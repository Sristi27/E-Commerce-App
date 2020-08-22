import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductDataService {

  constructor(private http: HttpClient) { }

  products = [
    {
      "id": "3efb591b1ab4ae385fd1814a210b3438",
      "name": "Abito Donna Tessuto Mini Dress",
      "on_sale": true,
      "price": 189500,
      "sale_price": 66499,
      "brand": "Versace",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTMxODQwMy44MDU4MzM2NTM1NDE1JnR5cGU9MTUmbXVybD1odHRwcyUzQSUyRiUyRnd3dy5zYWtzb2ZmNXRoLmNvbSUyRm1haW4lMkZQcm9kdWN0RGV0YWlsLmpzcCUzRlBST0RVQ1QlM0MlM0VwcmRfaWQlM0Q4NDU1MjQ0NDIzMTE4MTYmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9pbWFnZS5zNWEuY29tL2lzL2ltYWdlL3Nha3NvZmY1dGgvMDQwMDA5NTc1ODI0NF8zMDB4NDAwLmpwZyJ9"
    },
    {
      "id": "e17326765689aeb87ca14999d2317cf8",
      "name": "Elbow Sleeve Embellished Cape Sheath Dress",
      "on_sale": true,
      "price": 8900,
      "sale_price": 6499,
      "brand": "R & M Richards",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTUyODAyNC4xMTg0Mjg2MTE2NCZ0eXBlPTE1Jm11cmw9aHR0cHMlM0ElMkYlMkZ3d3cuamNwZW5uZXkuY29tJTJGcCUyRnItbS1yaWNoYXJkcy1lbGJvdy1zbGVldmUtZW1iZWxsaXNoZWQtY2FwZS1zaGVhdGgtZHJlc3MlMkZwcHI1MDA3NTM0MjgwJTNGcFRtcGxUeXBlJTNEcmVndWxhciUyNmNvdW50cnklM0RVUyUyNmN1cnJlbmN5JTNEVVNEJTI2c2VsZWN0ZWRTS1VJZCUzRDIyOTE1NjgwMDc1JTI2c2VsZWN0ZWRMb3RJZCUzRDIyOTE1NjglMjZmcm9tQmFnJTNEdHJ1ZSZVMT1QVFNJRE1ENUhlNWVjNWRmYzgzNTRkN2YxODhiNmU1ODliOWJjNzE5MSJ9",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9zN2Q5LnNjZW5lNy5jb20vaXMvaW1hZ2UvSkNQZW5uZXkvRFAwMTEyMjAxODE1MTEzMTczTT93aWQ9MjI4JmhlaT0yODAmb3Bfc2hhcnBlbj0xIn0"
    },
    {
      "id": "bfec5957c3a14310957fced571c8b468",
      "name": "Petite One-Shoulder Ruffle-Sleeve Dress",
      "on_sale": true,
      "price": 13900,
      "sale_price": 10399,
      "brand": "Calvin Klein",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTQ4NjEwOS4xOTE3OTc4ODI3ODUmdHlwZT0xNSZtdXJsPWh0dHBzJTNBJTJGJTJGd3d3Lm1hY3lzLmNvbSUyRnNob3AlMkZwcm9kdWN0JTJGY2FsdmluLWtsZWluLXBldGl0ZS1vbmUtc2hvdWxkZXItcnVmZmxlLXNsZWV2ZS1kcmVzcyUzRklEJTNENTI4MDgwNSUyNlBhcnRuZXJJRCUzRExJTktTSEFSRSUyNmNtX21tYyUzRExJTktTSEFSRS1fLTItXy0xMS1fLU1QMjExJlUxPVBUU0lETUQ1SGU1ZWM1ZGZjODM1NGQ3ZjE4OGI2ZTU4OWI5YmM3MTkxIn0",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9zbGltYWdlcy5tYWN5c2Fzc2V0cy5jb20vaXMvaW1hZ2UvTUNZL3Byb2R1Y3RzLzIvb3B0aW1pemVkLzkwOTQwODJfZnB4LnRpZj9mbXQ9anBlZyZ3aWQ9MjI4JnFsdD0xMDAmaGVpPTI4MCJ9"
    },
    {
      "id": "bdc1ef3b5814a7c9f75444b5d69ef308",
      "name": "3/4 Sleeve Sheath Dress",
      "on_sale": true,
      "price": 10000,
      "sale_price": 7499,
      "brand": "Jessica Howard",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTUyODAyNC4xMjA4NDQyNTI2MCZ0eXBlPTE1Jm11cmw9aHR0cHMlM0ElMkYlMkZ3d3cuamNwZW5uZXkuY29tJTJGcCUyRmplc3NpY2EtaG93YXJkLTMtNC1zbGVldmUtc2hlYXRoLWRyZXNzJTJGcHByNTAwNzMyMzc5OCUzRnBUbXBsVHlwZSUzRHJlZ3VsYXIlMjZjb3VudHJ5JTNEVVMlMjZjdXJyZW5jeSUzRFVTRCUyNnNlbGVjdGVkU0tVSWQlM0QyMjkxMTUxMDE5MCUyNnNlbGVjdGVkTG90SWQlM0QyMjkxMTUxJTI2ZnJvbUJhZyUzRHRydWUmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9zN2Q5LnNjZW5lNy5jb20vaXMvaW1hZ2UvSkNQZW5uZXkvRFAwOTAxMjAxNzE3MjUzNzI2TT93aWQ9MjI4JmhlaT0yODAmb3Bfc2hhcnBlbj0xIn0"
    },
    {
      "id": "f3a1d4c8d572ee98d326484af59ba951",
      "name": "Granite Dress, Size Small",
      "on_sale": true,
      "price": 15800,
      "sale_price": 7898,
      "brand": "Karen Kane",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTM1Nzk0NC4xMTczMTM3NyZ0eXBlPTE1Jm11cmw9aHR0cHMlM0ElMkYlMkZzaG9wLm5vcmRzdHJvbS5jb20lMkZTJTJGNDY1ODQ0MyUzRmNtX21tYyUzRExpbmtzaGFyZS1fLWRhdGFmZWVkLV8tV29tZW4lM0FEcmVzc2VzJTNBRHJlc3MtXy01MzkzNzA3JlUxPVBUU0lETUQ1SGU1ZWM1ZGZjODM1NGQ3ZjE4OGI2ZTU4OWI5YmM3MTkxIn0",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cDovL24ubm9yZHN0cm9tbWVkaWEuY29tL2ltYWdlZ2FsbGVyeS9zdG9yZS9wcm9kdWN0L2xhcmdlLzMvXzEwMTI2NTU4My5qcGcifQ"
    },
    {
      "id": "166e311f8457b76fdd410d7e526c7ec4",
      "name": "Petite Two-Piece Embroidered Bolero and Column Gown",
      "on_sale": true,
      "price": 23900,
      "sale_price": 16730,
      "brand": "Alex Evenings",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTM5MTUwMy41MDAwODc4MTkyODcmdHlwZT0xNSZtdXJsPWh0dHAlM0ElMkYlMkZ3d3cubG9yZGFuZHRheWxvci5jb20lMkZtYWluJTJGUHJvZHVjdERldGFpbC5qc3AlM0ZQUk9EVUNUJTNDJTNFcHJkX2lkJTNEODQ1NTI0NDQyNDMyOTE1JlUxPVBUU0lETUQ1SGU1ZWM1ZGZjODM1NGQ3ZjE4OGI2ZTU4OWI5YmM3MTkxIn0",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cDovL2ltYWdlLnM1YS5jb20vaXMvaW1hZ2UvTG9yZGFuZFRheWxvci8wNTAwMDg3ODE5Mjg3XzUwMHg1MDAuanBnIn0"
    },
    {
      "id": "fa6268f66ae3facb69e2f41ba8af30df",
      "name": "Plus Size Lace Illusion Sheath Dress",
      "on_sale": true,
      "price": 9900,
      "sale_price": 6899,
      "brand": "Jessica Howard",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTQ4NjEwOS44Mjg2NTk2MzA2NDEmdHlwZT0xNSZtdXJsPWh0dHBzJTNBJTJGJTJGd3d3Lm1hY3lzLmNvbSUyRnNob3AlMkZwcm9kdWN0JTJGamVzc2ljYS1ob3dhcmQtcGx1cy1zaXplLWxhY2UtaWxsdXNpb24tc2hlYXRoLWRyZXNzJTNGSUQlM0Q0Mzk0OTkxJTI2UGFydG5lcklEJTNETElOS1NIQVJFJTI2Y21fbW1jJTNETElOS1NIQVJFLV8tMi1fLTExLV8tTVAyMTEmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9zbGltYWdlcy5tYWN5c2Fzc2V0cy5jb20vaXMvaW1hZ2UvTUNZL3Byb2R1Y3RzLzkvb3B0aW1pemVkLzkyMjM1MTlfZnB4LnRpZj9mbXQ9anBlZyZ3aWQ9MjI4JnFsdD0xMDAmaGVpPTI4MCJ9"
    },
    {
      "id": "d0e18f99bcba722d7404342576f6b9b5",
      "name": "Belted Stretch-Wool Flounce Dress",
      "on_sale": true,
      "price": 219000,
      "sale_price": 76600,
      "brand": "Carolina Herrera",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTUxODE0MS4xMjA4OTM4Mjg0NCZ0eXBlPTE1Jm11cmw9aHR0cHMlM0ElMkYlMkZ3d3cubGFzdGNhbGwuY29tJTJGQ2Fyb2xpbmEtSGVycmVyYS13bC0zNHNsdi1ybmQtbmNrLWRycy13Zmx1dHRlJTJGcHJvZDQ5MDMzMTA0JTJGcC5wcm9kJlUxPVBUU0lETUQ1SGU1ZWM1ZGZjODM1NGQ3ZjE4OGI2ZTU4OWI5YmM3MTkxIn0",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly93d3cubGFzdGNhbGwuY29tL3Byb2R1Y3RfYXNzZXRzL0IvMy9XL1EvRS9MQ0IzV1FFX216LmpwZyJ9"
    },
    {
      "id": "3044b9d1ad724d9564e5d03014fa7677",
      "name": "Digiana Twist-Front Dress",
      "on_sale": true,
      "price": 54500,
      "sale_price": 21799,
      "brand": "Hugo Boss",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTMxODQwMy4wNDAwOTYyMDg1NDU3JnR5cGU9MTUmbXVybD1odHRwcyUzQSUyRiUyRnd3dy5zYWtzb2ZmNXRoLmNvbSUyRm1haW4lMkZQcm9kdWN0RGV0YWlsLmpzcCUzRlBST0RVQ1QlM0MlM0VwcmRfaWQlM0Q4NDU1MjQ0NDIzNDE5MjQmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9pbWFnZS5zNWEuY29tL2lzL2ltYWdlL3Nha3NvZmY1dGgvMDQwMDA5NjIwODU0NF8zMDB4NDAwLmpwZyJ9"
    },
    {
      "id": "b4c751df9f70542579f9289f5cd717cb",
      "name": "Velvet One-Shoulder Ruffle Dress",
      "on_sale": true,
      "price": 12900,
      "sale_price": 7999,
      "brand": "Calvin Klein",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTQ4NjEwOS4xOTA0NjYxNTc4MjcmdHlwZT0xNSZtdXJsPWh0dHBzJTNBJTJGJTJGd3d3Lm1hY3lzLmNvbSUyRnNob3AlMkZwcm9kdWN0JTJGY2FsdmluLWtsZWluLXZlbHZldC1vbmUtc2hvdWxkZXItcnVmZmxlLWRyZXNzJTNGSUQlM0Q1MDE1NDkxJTI2UGFydG5lcklEJTNETElOS1NIQVJFJTI2Y21fbW1jJTNETElOS1NIQVJFLV8tMi1fLTExLV8tTVAyMTEmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9zbGltYWdlcy5tYWN5c2Fzc2V0cy5jb20vaXMvaW1hZ2UvTUNZL3Byb2R1Y3RzLzAvb3B0aW1pemVkLzg4NjE2MjBfZnB4LnRpZj9mbXQ9anBlZyZ3aWQ9MjI4JnFsdD0xMDAmaGVpPTI4MCJ9"
    },
    {
      "id": "64cabc0a0063c1dd4ffdf73baba5a4ca",
      "name": "Bishop-Sleeve Dress",
      "on_sale": true,
      "price": 7900,
      "sale_price": 4999,
      "brand": "Nine West",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTQ4NjEwOS43ODI0MTg5ODYwNjkmdHlwZT0xNSZtdXJsPWh0dHBzJTNBJTJGJTJGd3d3Lm1hY3lzLmNvbSUyRnNob3AlMkZwcm9kdWN0JTJGbmluZS13ZXN0LWJpc2hvcC1zbGVldmUtZHJlc3MlM0ZJRCUzRDUwMTY4NjElMjZQYXJ0bmVySUQlM0RMSU5LU0hBUkUlMjZjbV9tbWMlM0RMSU5LU0hBUkUtXy0yLV8tMTEtXy1NUDIxMSZVMT1QVFNJRE1ENUhlNWVjNWRmYzgzNTRkN2YxODhiNmU1ODliOWJjNzE5MSJ9",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9zbGltYWdlcy5tYWN5c2Fzc2V0cy5jb20vaXMvaW1hZ2UvTUNZL3Byb2R1Y3RzLzQvb3B0aW1pemVkLzg3OTY3ODJfZnB4LnRpZj9mbXQ9anBlZyZ3aWQ9MjI4JnFsdD0xMDAmaGVpPTI4MCJ9"
    },
    {
      "id": "599ab480126c6e3425c8c0282ccec072",
      "name": "Embellished High-Low Gown",
      "on_sale": true,
      "price": 22900,
      "sale_price": 17099,
      "brand": "Adrianna Papell",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTQ4NjEwOS4xOTE5MzcxMDQ2MzAmdHlwZT0xNSZtdXJsPWh0dHBzJTNBJTJGJTJGd3d3Lm1hY3lzLmNvbSUyRnNob3AlMkZwcm9kdWN0JTJGYWRyaWFubmEtcGFwZWxsLWVtYmVsbGlzaGVkLWhpZ2gtbG93LWdvd24lM0ZJRCUzRDUzOTk5MjElMjZQYXJ0bmVySUQlM0RMSU5LU0hBUkUlMjZjbV9tbWMlM0RMSU5LU0hBUkUtXy0yLV8tMTEtXy1NUDIxMSZVMT1QVFNJRE1ENUhlNWVjNWRmYzgzNTRkN2YxODhiNmU1ODliOWJjNzE5MSJ9",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9zbGltYWdlcy5tYWN5c2Fzc2V0cy5jb20vaXMvaW1hZ2UvTUNZL3Byb2R1Y3RzLzcvb3B0aW1pemVkLzkxMzgxMjdfZnB4LnRpZj9mbXQ9anBlZyZ3aWQ9MjI4JnFsdD0xMDAmaGVpPTI4MCJ9"
    },
    
    {
      "id": "d0fccc2258323c667eac70f6bf750683",
      "name": "V-Neck Slip Dress",
      "on_sale": true,
      "price": 19800,
      "sale_price": 8399,
      "brand": "MOTHER",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTMxODQwMy4wODQyMzk3MTQ2MjU3JnR5cGU9MTUmbXVybD1odHRwcyUzQSUyRiUyRnd3dy5zYWtzb2ZmNXRoLmNvbSUyRm1haW4lMkZQcm9kdWN0RGV0YWlsLmpzcCUzRlBST0RVQ1QlM0MlM0VwcmRfaWQlM0Q4NDU1MjQ0NDIzODUwNzUmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9pbWFnZS5zNWEuY29tL2lzL2ltYWdlL3Nha3NvZmY1dGgvMDQwMDA5NzMyMTgxMV8zMDB4NDAwLmpwZyJ9"
    },
    {
      "id": "dabef76198802ab9adffa49c30cc5620",
      "name": "Ruffled Bodycon Mini Dress",
      "on_sale": true,
      "price": 7800,
      "sale_price": 5850,
      "brand": "Design Lab Lord & Taylor",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTM5MTUwMy41MDAwODc5ODgyODcmdHlwZT0xNSZtdXJsPWh0dHAlM0ElMkYlMkZ3d3cubG9yZGFuZHRheWxvci5jb20lMkZtYWluJTJGUHJvZHVjdERldGFpbC5qc3AlM0ZQUk9EVUNUJTNDJTNFcHJkX2lkJTNEODQ1NTI0NDQyNDU4MzY3JlUxPVBUU0lETUQ1SGU1ZWM1ZGZjODM1NGQ3ZjE4OGI2ZTU4OWI5YmM3MTkxIn0",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cDovL2ltYWdlLnM1YS5jb20vaXMvaW1hZ2UvTG9yZGFuZFRheWxvci8wNTAwMDg3OTg4Mjg3XzUwMHg1MDAuanBnIn0"
    },
    {
      "id": "c228411f898f99c27a8ad683d2707233",
      "name": "Crushed Velvet Bell Sleeve Dress",
      "on_sale": true,
      "price": 12800,
      "sale_price": 9600,
      "brand": "Karen Kane",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTM2NDEwMy43MzQwMDg2ODYyODYmdHlwZT0xNSZtdXJsPWh0dHBzJTNBJTJGJTJGd3d3LmJsb29taW5nZGFsZXMuY29tJTJGc2hvcCUyRnByb2R1Y3QlMkZrYXJlbi1rYW5lLWNydXNoZWQtdmVsdmV0LWJlbGwtc2xlZXZlLWRyZXNzJTNGSUQlM0QyNzE3MDg4JTI2UGFydG5lcklEJTNETElOS1NIQVJFJTI2Y21fbW1jJTNETElOS1NIQVJFLV8tbi1fLW4tXy1uJlUxPVBUU0lETUQ1SGU1ZWM1ZGZjODM1NGQ3ZjE4OGI2ZTU4OWI5YmM3MTkxIn0",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9pbWFnZXMuYmxvb21pbmdkYWxlc2Fzc2V0cy5jb20vaXMvaW1hZ2UvQkxNL3Byb2R1Y3RzLzQvb3B0aW1pemVkLzk2MTQ2MzNfZnB4LnRpZj9sYXllcj1jb21wJndpZD0yMjgmcWx0PTEwMCUyQzAmNG1zbj0uanBnJmhlaT0yODAmcmVzTW9kZT1iaWxpbiZvcF91c209MC43JTJDMS4wJTJDMC41JTJDMCZmbXQ9anBlZyZvcF9zaGFycGVuPTAifQ"
    },
    {
      "id": "acec19b1f8d11199ce317eff1fc06206",
      "name": "Short Sleeve Sheath Dress",
      "on_sale": true,
      "price": 7400,
      "sale_price": 4299,
      "brand": "WESLEE ROSE",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTUyODAyNC4xMTc3MzI2MDg3MiZ0eXBlPTE1Jm11cmw9aHR0cHMlM0ElMkYlMkZ3d3cuamNwZW5uZXkuY29tJTJGcCUyRndlc2xlZS1yb3NlLXNob3J0LXNsZWV2ZS1mbG9yYWwtc2hlYXRoLWRyZXNzJTJGcHByNTAwNzMxNDM1MyUzRnBUbXBsVHlwZSUzRHJlZ3VsYXIlMjZjb3VudHJ5JTNEVVMlMjZjdXJyZW5jeSUzRFVTRCUyNnNlbGVjdGVkU0tVSWQlM0QyMjIyMDgwMDAzNCUyNnNlbGVjdGVkTG90SWQlM0QyMjIyMDgwJTI2ZnJvbUJhZyUzRHRydWUmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9zN2Q5LnNjZW5lNy5jb20vaXMvaW1hZ2UvSkNQZW5uZXkvRFAxMjEyMjAxNzA5MTU1OTEwTT93aWQ9MjI4JmhlaT0yODAmb3Bfc2hhcnBlbj0xIn0"
    },
    {
      "id": "4a42ee9db748d9fc8253b1fb4b4163c1",
      "name": "Lace Mermaid Gown",
      "on_sale": true,
      "price": 28900,
      "sale_price": 14450,
      "brand": "Betsy & Adam",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTM5MTUwMy41MDAwODc2MzExMDYmdHlwZT0xNSZtdXJsPWh0dHAlM0ElMkYlMkZ3d3cubG9yZGFuZHRheWxvci5jb20lMkZtYWluJTJGUHJvZHVjdERldGFpbC5qc3AlM0ZQUk9EVUNUJTNDJTNFcHJkX2lkJTNEODQ1NTI0NDQyNDA5Mzc2JlUxPVBUU0lETUQ1SGU1ZWM1ZGZjODM1NGQ3ZjE4OGI2ZTU4OWI5YmM3MTkxIn0",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cDovL2ltYWdlLnM1YS5jb20vaXMvaW1hZ2UvTG9yZGFuZFRheWxvci8wNTAwMDg3NjMxMTA2XzUwMHg1MDAuanBnIn0"
    },
    {
      "id": "104c676a871cc25e2954c619ff0fd32d",
      "name": "Flare-Sleeve V-Neck A-line Dress",
      "on_sale": true,
      "price": 15800,
      "sale_price": 8900,
      "brand": "Label by 5Twelve",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTUxODE0MS4xMTE3MjYxMTIzOCZ0eXBlPTE1Jm11cmw9aHR0cHMlM0ElMkYlMkZ3d3cubGFzdGNhbGwuY29tJTJGTGFiZWwtYnktNVR3ZWx2ZS1GbGFyZS1TbGVldmUtVi1OZWNrLUEtbGluZS1EcmVzcyUyRnByb2Q0NjM0MDM5NSUyRnAucHJvZCZVMT1QVFNJRE1ENUhlNWVjNWRmYzgzNTRkN2YxODhiNmU1ODliOWJjNzE5MSJ9",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly93d3cubGFzdGNhbGwuY29tL3Byb2R1Y3RfYXNzZXRzL1QvVy8wL1MvQi9MQ1RXMFNCX216LmpwZyJ9"
    },
    {
      "id": "2dbd651ec6acf4c6393766f165bfe025",
      "name": "Sleeveless Applique Bodycon Dress",
      "on_sale": true,
      "price": 7400,
      "sale_price": 4299,
      "brand": "REBECCA B",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTUyODAyNC4xMTgwNDMzNjgxNiZ0eXBlPTE1Jm11cmw9aHR0cHMlM0ElMkYlMkZ3d3cuamNwZW5uZXkuY29tJTJGcCUyRnJlYmVjY2EtYi1zbGVldmVsZXNzLWFwcGxpcXVlLWJvZHljb24tZHJlc3MlMkZwcHI1MDA3MzU4MzYxJTNGcFRtcGxUeXBlJTNEcmVndWxhciUyNmNvdW50cnklM0RVUyUyNmN1cnJlbmN5JTNEVVNEJTI2c2VsZWN0ZWRTS1VJZCUzRDIxOTEyNDYwMjQwJTI2c2VsZWN0ZWRMb3RJZCUzRDIxOTEyNDYlMjZmcm9tQmFnJTNEdHJ1ZSZVMT1QVFNJRE1ENUhlNWVjNWRmYzgzNTRkN2YxODhiNmU1ODliOWJjNzE5MSJ9",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9zN2Q5LnNjZW5lNy5jb20vaXMvaW1hZ2UvSkNQZW5uZXkvRFAxMjEzMjAxNzE3NDUwNDY0TT93aWQ9MjI4JmhlaT0yODAmb3Bfc2hhcnBlbj0xIn0"
    },
    {
      "id": "2ccf931843f9699cf9188e5c911341f3",
      "name": "Sleeveless Applique Bodycon Dress",
      "on_sale": true,
      "price": 7400,
      "sale_price": 4299,
      "brand": "REBECCA B",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTUyODAyNC4xMTc3MzIxODM3MiZ0eXBlPTE1Jm11cmw9aHR0cHMlM0ElMkYlMkZ3d3cuamNwZW5uZXkuY29tJTJGcCUyRnJlYmVjY2EtYi1zbGVldmVsZXNzLWFwcGxpcXVlLWJvZHljb24tZHJlc3MlMkZwcHI1MDA3MzU4MzQyJTNGcFRtcGxUeXBlJTNEcmVndWxhciUyNmNvdW50cnklM0RVUyUyNmN1cnJlbmN5JTNEVVNEJTI2c2VsZWN0ZWRTS1VJZCUzRDIxOTEyMjgwMjA4JTI2c2VsZWN0ZWRMb3RJZCUzRDIxOTEyMjglMjZmcm9tQmFnJTNEdHJ1ZSZVMT1QVFNJRE1ENUhlNWVjNWRmYzgzNTRkN2YxODhiNmU1ODliOWJjNzE5MSJ9",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9zN2Q5LnNjZW5lNy5jb20vaXMvaW1hZ2UvSkNQZW5uZXkvRFAxMjEzMjAxNzE3NDUwMTY0TT93aWQ9MjI4JmhlaT0yODAmb3Bfc2hhcnBlbj0xIn0"
    },
    {
      "id": "932831533d3aceeb4ccfd0891c93def4",
      "name": "Crewneck Back Keyhole Cutout Shift Dress",
      "on_sale": true,
      "price": 16800,
      "sale_price": 3497,
      "brand": "Julia Jordan",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTMxODQwMy4wNzA1Nzc2ODM1NzMyJnR5cGU9MTUmbXVybD1odHRwcyUzQSUyRiUyRnd3dy5zYWtzb2ZmNXRoLmNvbSUyRm1haW4lMkZQcm9kdWN0RGV0YWlsLmpzcCUzRlBST0RVQ1QlM0MlM0VwcmRfaWQlM0Q4NDU1MjQ0NDIxOTUzOTEmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9pbWFnZS5zNWEuY29tL2lzL2ltYWdlL3Nha3NvZmY1dGgvMDQwMDA5MzMyMDIwMl8zMDB4NDAwLmpwZyJ9"
    },
   
   
    {
      "id": "e308d0c7e3674ad3fedb7085c1811965",
      "name": "Cold-Shoulder Petal-Sleeve Sheath Dress",
      "on_sale": true,
      "price": 14000,
      "sale_price": 5999,
      "brand": "Lauren Ralph Lauren",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTM5MTUwMy41MDAwODc3MjUzNjgmdHlwZT0xNSZtdXJsPWh0dHAlM0ElMkYlMkZ3d3cubG9yZGFuZHRheWxvci5jb20lMkZtYWluJTJGUHJvZHVjdERldGFpbC5qc3AlM0ZQUk9EVUNUJTNDJTNFcHJkX2lkJTNEODQ1NTI0NDQyNDIwODk0JlUxPVBUU0lETUQ1SGU1ZWM1ZGZjODM1NGQ3ZjE4OGI2ZTU4OWI5YmM3MTkxIn0",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cDovL2ltYWdlLnM1YS5jb20vaXMvaW1hZ2UvTG9yZGFuZFRheWxvci8wNTAwMDg3NzI1MzY4XzUwMHg1MDAuanBnIn0"
    },
    {
      "id": "841d7b3b64d5605850cef513593832ba",
      "name": "Jersey Asymmetrical Hem Dress",
      "on_sale": true,
      "price": 119000,
      "sale_price": 20498,
      "brand": "Akris punto",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTMxODQwMy4wNDAwOTM5NjE2OTgxJnR5cGU9MTUmbXVybD1odHRwcyUzQSUyRiUyRnd3dy5zYWtzb2ZmNXRoLmNvbSUyRm1haW4lMkZQcm9kdWN0RGV0YWlsLmpzcCUzRlBST0RVQ1QlM0MlM0VwcmRfaWQlM0Q4NDU1MjQ0NDIyMjY4NDEmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9pbWFnZS5zNWEuY29tL2lzL2ltYWdlL3Nha3NvZmY1dGgvMDQwMDA5Mzk2MTcwMF8zMDB4NDAwLmpwZyJ9"
    },
    {
      "id": "e5352d51d695c2f803b3f6756fccb7c0",
      "name": "One-Shoulder Caped Sheath Dress",
      "on_sale": true,
      "price": 13400,
      "sale_price": 9900,
      "brand": "Iconic American Designer",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTUxODE0MS4xMTY1OTczNjIyMiZ0eXBlPTE1Jm11cmw9aHR0cHMlM0ElMkYlMkZ3d3cubGFzdGNhbGwuY29tJTJGSWNvbmljLUFtZXJpY2FuLURlc2lnbmVyLU9uZS1TaG91bGRlci1DYXBlZC1TaGVhdGgtRHJlc3MlMkZwcm9kNDczNDAxMjIlMkZwLnByb2QmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly93d3cubGFzdGNhbGwuY29tL3Byb2R1Y3RfYXNzZXRzL1QvVy9HL0QvMi9MQ1RXR0QyX216LmpwZyJ9"
    },
    {
      "id": "469f1432c7759df48a4d4be3d379ea14",
      "name": "Embellished Sleeveless Dress",
      "on_sale": true,
      "price": 18900,
      "sale_price": 9499,
      "brand": "Marina",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTMxODQwMy4wNzk2Mzk2MzczMzkxJnR5cGU9MTUmbXVybD1odHRwcyUzQSUyRiUyRnd3dy5zYWtzb2ZmNXRoLmNvbSUyRm1haW4lMkZQcm9kdWN0RGV0YWlsLmpzcCUzRlBST0RVQ1QlM0MlM0VwcmRfaWQlM0Q4NDU1MjQ0NDIyOTYxMDImVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9pbWFnZS5zNWEuY29tL2lzL2ltYWdlL3Nha3NvZmY1dGgvMDQwMDA5NTQxNjM1OV8zMDB4NDAwLmpwZyJ9"
    },
    {
      "id": "0c374e6636c95eb6380e432e26bee3a9",
      "name": "Abstract A-Line Dress",
      "on_sale": true,
      "price": 36500,
      "sale_price": 17999,
      "brand": "MILLY",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTMxODQwMy4wMTkwNzM2ODE1MjExJnR5cGU9MTUmbXVybD1odHRwcyUzQSUyRiUyRnd3dy5zYWtzb2ZmNXRoLmNvbSUyRm1haW4lMkZQcm9kdWN0RGV0YWlsLmpzcCUzRlBST0RVQ1QlM0MlM0VwcmRfaWQlM0Q4NDU1MjQ0NDIzODc5NjImVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9pbWFnZS5zNWEuY29tL2lzL2ltYWdlL3Nha3NvZmY1dGgvMDQwMDA5NzM3OTc4OF8zMDB4NDAwLmpwZyJ9"
    },
    {
      "id": "599ab480126c6e3425c8c0282ccec072",
      "name": "Embellished High-Low Gown",
      "on_sale": true,
      "price": 22900,
      "sale_price": 17099,
      "brand": "Adrianna Papell",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTQ4NjEwOS4xOTE5MzcxMDQ2MzAmdHlwZT0xNSZtdXJsPWh0dHBzJTNBJTJGJTJGd3d3Lm1hY3lzLmNvbSUyRnNob3AlMkZwcm9kdWN0JTJGYWRyaWFubmEtcGFwZWxsLWVtYmVsbGlzaGVkLWhpZ2gtbG93LWdvd24lM0ZJRCUzRDUzOTk5MjElMjZQYXJ0bmVySUQlM0RMSU5LU0hBUkUlMjZjbV9tbWMlM0RMSU5LU0hBUkUtXy0yLV8tMTEtXy1NUDIxMSZVMT1QVFNJRE1ENUhlNWVjNWRmYzgzNTRkN2YxODhiNmU1ODliOWJjNzE5MSJ9",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9zbGltYWdlcy5tYWN5c2Fzc2V0cy5jb20vaXMvaW1hZ2UvTUNZL3Byb2R1Y3RzLzcvb3B0aW1pemVkLzkxMzgxMjdfZnB4LnRpZj9mbXQ9anBlZyZ3aWQ9MjI4JnFsdD0xMDAmaGVpPTI4MCJ9"
    },
    
    {
      "id": "d0fccc2258323c667eac70f6bf750683",
      "name": "V-Neck Slip Dress",
      "on_sale": true,
      "price": 19800,
      "sale_price": 8399,
      "brand": "MOTHER",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTMxODQwMy4wODQyMzk3MTQ2MjU3JnR5cGU9MTUmbXVybD1odHRwcyUzQSUyRiUyRnd3dy5zYWtzb2ZmNXRoLmNvbSUyRm1haW4lMkZQcm9kdWN0RGV0YWlsLmpzcCUzRlBST0RVQ1QlM0MlM0VwcmRfaWQlM0Q4NDU1MjQ0NDIzODUwNzUmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9pbWFnZS5zNWEuY29tL2lzL2ltYWdlL3Nha3NvZmY1dGgvMDQwMDA5NzMyMTgxMV8zMDB4NDAwLmpwZyJ9"
    },
    {
      "id": "3044b9d1ad724d9564e5d03014fa7677",
      "name": "Digiana Twist-Front Dress",
      "on_sale": true,
      "price": 54500,
      "sale_price": 21799,
      "brand": "Hugo Boss",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTMxODQwMy4wNDAwOTYyMDg1NDU3JnR5cGU9MTUmbXVybD1odHRwcyUzQSUyRiUyRnd3dy5zYWtzb2ZmNXRoLmNvbSUyRm1haW4lMkZQcm9kdWN0RGV0YWlsLmpzcCUzRlBST0RVQ1QlM0MlM0VwcmRfaWQlM0Q4NDU1MjQ0NDIzNDE5MjQmVTE9UFRTSURNRDVIZTVlYzVkZmM4MzU0ZDdmMTg4YjZlNTg5YjliYzcxOTEifQ",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cHM6Ly9pbWFnZS5zNWEuY29tL2lzL2ltYWdlL3Nha3NvZmY1dGgvMDQwMDA5NjIwODU0NF8zMDB4NDAwLmpwZyJ9"
    },
    
    
    {
      "id": "dabef76198802ab9adffa49c30cc5620",
      "name": "Ruffled Bodycon Mini Dress",
      "on_sale": true,
      "price": 7800,
      "sale_price": 5850,
      "brand": "Design Lab Lord & Taylor",
      "currency": "USD",
      "buy_url":
        "https://products.precisetarget.com/eyJhcGlfa2V5IjoiN2MxMjUzNDgtZmFlOC00OThiLThhMjMtZjk0NmZhZmRhMjQ2IiwibGluayI6Imh0dHA6Ly9jbGljay5saW5rc3luZXJneS5jb20vbGluaz9pZD1KN2ZvdVVlNkFpRSZvZmZlcmlkPTM5MTUwMy41MDAwODc5ODgyODcmdHlwZT0xNSZtdXJsPWh0dHAlM0ElMkYlMkZ3d3cubG9yZGFuZHRheWxvci5jb20lMkZtYWluJTJGUHJvZHVjdERldGFpbC5qc3AlM0ZQUk9EVUNUJTNDJTNFcHJkX2lkJTNEODQ1NTI0NDQyNDU4MzY3JlUxPVBUU0lETUQ1SGU1ZWM1ZGZjODM1NGQ3ZjE4OGI2ZTU4OWI5YmM3MTkxIn0",
      "image_url":
        "https://images.precisetarget.com/eyJsaW5rIjoiaHR0cDovL2ltYWdlLnM1YS5jb20vaXMvaW1hZ2UvTG9yZGFuZFRheWxvci8wNTAwMDg3OTg4Mjg3XzUwMHg1MDAuanBnIn0"
    },
  ]

  getAllProducts() {

    return this.products;
  }

}
