# MLPlot

![Example](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGJhc2VQcm9maWxlPSJmdWxsIiB3aWR0aD0iMTAyNCIgaGVpZ2h0PSI2MDAiID4KPGRlZnM+PGcgaWQ9ImRvdC0xLTQtcmVkIj48L2c+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDI0IiBoZWlnaHQ9IjYwMCIgZmlsbD0id2hpdGUiIC8+PHBvbHlsaW5lICBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLWRhc2hhcnJheTogMC43NSwgMS41OyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDAuNzUiIHBvaW50cz0iMTIzLjM1OTY0OTEyMjgwNzAxLDMwIDEyMy4zNTk2NDkxMjI4MDcwMSw1MjAiIC8+PHBvbHlsaW5lICBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLWRhc2hhcnJheTogMC43NSwgMS41OyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDAuNzUiIHBvaW50cz0iMjUwLjQwNjQzMjc0ODUzOCwzMCAyNTAuNDA2NDMyNzQ4NTM4LDUyMCIgLz48cG9seWxpbmUgIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2UtZGFzaGFycmF5OiAwLjc1LCAxLjU7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMC43NSIgcG9pbnRzPSIzNzcuNDUzMjE2Mzc0MjY5LDMwIDM3Ny40NTMyMTYzNzQyNjksNTIwIiAvPjxwb2x5bGluZSAgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZS1kYXNoYXJyYXk6IDAuNzUsIDEuNTsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAwLjc1IiBwb2ludHM9IjUwNC41LDMwIDUwNC41LDUyMCIgLz48cG9seWxpbmUgIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2UtZGFzaGFycmF5OiAwLjc1LCAxLjU7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMC43NSIgcG9pbnRzPSI2MzEuNTQ2NzgzNjI1NzMxLDMwIDYzMS41NDY3ODM2MjU3MzEsNTIwIiAvPjxwb2x5bGluZSAgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZS1kYXNoYXJyYXk6IDAuNzUsIDEuNTsgc3Ryb2tlOiBibGFjazsgc3Ryb2tlLXdpZHRoOiAwLjc1IiBwb2ludHM9Ijc1OC41OTM1NjcyNTE0NjIsMzAgNzU4LjU5MzU2NzI1MTQ2Miw1MjAiIC8+PHBvbHlsaW5lICBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLWRhc2hhcnJheTogMC43NSwgMS41OyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDAuNzUiIHBvaW50cz0iODg1LjY0MDM1MDg3NzE5MywzMCA4ODUuNjQwMzUwODc3MTkzLDUyMCIgLz48cG9seWxpbmUgIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2UtZGFzaGFycmF5OiAwLjc1LCAxLjU7IHN0cm9rZTogYmxhY2s7IHN0cm9rZS13aWR0aDogMC43NSIgcG9pbnRzPSI3MCw0ODkuOTEyMjgwNzAxNzU0NCA5MzksNDg5LjkxMjI4MDcwMTc1NDQiIC8+PHBvbHlsaW5lICBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLWRhc2hhcnJheTogMC43NSwgMS41OyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDAuNzUiIHBvaW50cz0iNzAsNDI4LjUwODc3MTkyOTgyNDU1IDkzOSw0MjguNTA4NzcxOTI5ODI0NTUiIC8+PHBvbHlsaW5lICBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLWRhc2hhcnJheTogMC43NSwgMS41OyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDAuNzUiIHBvaW50cz0iNzAsMzY3LjEwNTI2MzE1Nzg5NDc0IDkzOSwzNjcuMTA1MjYzMTU3ODk0NzQiIC8+PHBvbHlsaW5lICBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLWRhc2hhcnJheTogMC43NSwgMS41OyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDAuNzUiIHBvaW50cz0iNzAsMzA1LjcwMTc1NDM4NTk2NDkzIDkzOSwzMDUuNzAxNzU0Mzg1OTY0OTMiIC8+PHBvbHlsaW5lICBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLWRhc2hhcnJheTogMC43NSwgMS41OyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDAuNzUiIHBvaW50cz0iNzAsMjQ0LjI5ODI0NTYxNDAzNTA3IDkzOSwyNDQuMjk4MjQ1NjE0MDM1MDciIC8+PHBvbHlsaW5lICBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLWRhc2hhcnJheTogMC43NSwgMS41OyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDAuNzUiIHBvaW50cz0iNzAsMTgyLjg5NDczNjg0MjEwNTI2IDkzOSwxODIuODk0NzM2ODQyMTA1MjYiIC8+PHBvbHlsaW5lICBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLWRhc2hhcnJheTogMC43NSwgMS41OyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDAuNzUiIHBvaW50cz0iNzAsMTIxLjQ5MTIyODA3MDE3NTQ1IDkzOSwxMjEuNDkxMjI4MDcwMTc1NDUiIC8+PHBvbHlsaW5lICBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlLWRhc2hhcnJheTogMC43NSwgMS41OyBzdHJva2U6IGJsYWNrOyBzdHJva2Utd2lkdGg6IDAuNzUiIHBvaW50cz0iNzAsNjAuMDg3NzE5Mjk4MjQ1NjQ1IDkzOSw2MC4wODc3MTkyOTgyNDU2NDUiIC8+PHBvbHlsaW5lICBzdHJva2U9InJlZCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBwb2ludHM9IjEyMy4zNTk2LDM2Ny4xMDUzIDI1MC40MDY0LDQyOC41MDg4IDM3Ny40NTMyLDI0NC4yOTgyIDUwNC41LDQ4OS45MTIzIDYzMS41NDY4LDE4Mi44OTQ3IDc1OC41OTM2LDI0NC4yOTgyIDg4NS42NDA0LDYwLjA4NzcgIiAvPgo8dXNlIHg9IjEyMy4zNTk2IiB5PSIzNjcuMTA1MyIgeGxpbms6aHJlZj0iI2RvdC0xLTQtcmVkIiAvPgo8dXNlIHg9IjI1MC40MDY0IiB5PSI0MjguNTA4OCIgeGxpbms6aHJlZj0iI2RvdC0xLTQtcmVkIiAvPgo8dXNlIHg9IjM3Ny40NTMyIiB5PSIyNDQuMjk4MiIgeGxpbms6aHJlZj0iI2RvdC0xLTQtcmVkIiAvPgo8dXNlIHg9IjUwNC41IiB5PSI0ODkuOTEyMyIgeGxpbms6aHJlZj0iI2RvdC0xLTQtcmVkIiAvPgo8dXNlIHg9IjYzMS41NDY4IiB5PSIxODIuODk0NyIgeGxpbms6aHJlZj0iI2RvdC0xLTQtcmVkIiAvPgo8dXNlIHg9Ijc1OC41OTM2IiB5PSIyNDQuMjk4MiIgeGxpbms6aHJlZj0iI2RvdC0xLTQtcmVkIiAvPgo8dXNlIHg9Ijg4NS42NDA0IiB5PSI2MC4wODc3IiB4bGluazpocmVmPSIjZG90LTEtNC1yZWQiIC8+CjxnIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyI+IDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI2MDAiIHN0eWxlPSJmaWxsOnJnYigyNTUsMjU1LDI1NSk7IiAvPjxyZWN0IHg9IjcwIiB5PSIwIiB3aWR0aD0iOTU0IiBoZWlnaHQ9IjMwIiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDI1NSwyNTUpOyIgLz48cmVjdCB4PSI3MCIgeT0iNTIwIiB3aWR0aD0iOTU0IiBoZWlnaHQ9IjgwIiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDI1NSwyNTUpOyIgLz48cmVjdCB4PSI5MzkiIHk9IjMwIiB3aWR0aD0iODUiIGhlaWdodD0iNDkwIiBzdHlsZT0iZmlsbDpyZ2IoMjU1LDI1NSwyNTUpOyIgLz48cmVjdCBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIHg9IjcwIiB5PSIzMCIgd2lkdGg9Ijg2OSIgaGVpZ2h0PSI0OTAiICAvPjwvZz48cmVjdCAgb3BhY2l0eT0iMC44NSIgc2hhcGUtcmVuZGVyaW5nPSJjcmlzcEVkZ2VzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZT0iYmxhY2siIGZpbGw9IndoaXRlIiB4PSI3NSIgeT0iMzUiIHdpZHRoPSIyMjAiIGhlaWdodD0iMjAiIC8+PHBvbHlsaW5lICBzdHJva2U9InJlZCIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBwb2ludHM9IjgxLjYsNDUgMTM0LjQsNDUgIiAvPjx1c2UgeD0iMTA4IiB5PSI0NSIgeGxpbms6aHJlZj0iI2RvdC0xLTQtcmVkIiAvPjx0ZXh0IGZvbnQtc2l6ZT0iMTIiIGZvbnQtZmFtaWx5PSJoZWx2ZXRpY2EiIHRleHQtYW5jaG9yPSJzdGFydCIgeD0iMTQxIiB5PSI0OS40NCI+bXluYW1lPC90ZXh0PjxnIHNoYXBlLXJlbmRlcmluZz0iY3Jpc3BFZGdlcyI+PGxpbmUgeDE9IjEyMy4zNTk2NDkxMjI4MDcwMSIgeDI9IjEyMy4zNTk2NDkxMjI4MDcwMSIgeTE9IjUxNSIgeTI9IjUyMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiAvPjx0ZXh0IGZvbnQtZmFtaWx5PSJoZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIxMi42MDAwMDAwMDAwMDAwMDEiIHg9IjEyMy4zNTk2NDkxMjI4MDcwMSIgeT0iNTIwIj4xPC90ZXh0PjxsaW5lIHgxPSIxMjMuMzU5NjQ5MTIyODA3MDEiIHgyPSIxMjMuMzU5NjQ5MTIyODA3MDEiIHkxPSIzMCIgeTI9IjM1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIC8+PGxpbmUgeDE9IjI1MC40MDY0MzI3NDg1MzgiIHgyPSIyNTAuNDA2NDMyNzQ4NTM4IiB5MT0iNTE1IiB5Mj0iNTIwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIC8+PHRleHQgZm9udC1mYW1pbHk9ImhlbHZldGljYSIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjEyLjYwMDAwMDAwMDAwMDAwMSIgeD0iMjUwLjQwNjQzMjc0ODUzOCIgeT0iNTIwIj4yPC90ZXh0PjxsaW5lIHgxPSIyNTAuNDA2NDMyNzQ4NTM4IiB4Mj0iMjUwLjQwNjQzMjc0ODUzOCIgeTE9IjMwIiB5Mj0iMzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgLz48bGluZSB4MT0iMzc3LjQ1MzIxNjM3NDI2OSIgeDI9IjM3Ny40NTMyMTYzNzQyNjkiIHkxPSI1MTUiIHkyPSI1MjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgLz48dGV4dCBmb250LWZhbWlseT0iaGVsdmV0aWNhIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMTIuNjAwMDAwMDAwMDAwMDAxIiB4PSIzNzcuNDUzMjE2Mzc0MjY5IiB5PSI1MjAiPjM8L3RleHQ+PGxpbmUgeDE9IjM3Ny40NTMyMTYzNzQyNjkiIHgyPSIzNzcuNDUzMjE2Mzc0MjY5IiB5MT0iMzAiIHkyPSIzNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiAvPjxsaW5lIHgxPSI1MDQuNSIgeDI9IjUwNC41IiB5MT0iNTE1IiB5Mj0iNTIwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIC8+PHRleHQgZm9udC1mYW1pbHk9ImhlbHZldGljYSIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjEyLjYwMDAwMDAwMDAwMDAwMSIgeD0iNTA0LjUiIHk9IjUyMCI+NDwvdGV4dD48bGluZSB4MT0iNTA0LjUiIHgyPSI1MDQuNSIgeTE9IjMwIiB5Mj0iMzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgLz48bGluZSB4MT0iNjMxLjU0Njc4MzYyNTczMSIgeDI9IjYzMS41NDY3ODM2MjU3MzEiIHkxPSI1MTUiIHkyPSI1MjAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgLz48dGV4dCBmb250LWZhbWlseT0iaGVsdmV0aWNhIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMTIuNjAwMDAwMDAwMDAwMDAxIiB4PSI2MzEuNTQ2NzgzNjI1NzMxIiB5PSI1MjAiPjU8L3RleHQ+PGxpbmUgeDE9IjYzMS41NDY3ODM2MjU3MzEiIHgyPSI2MzEuNTQ2NzgzNjI1NzMxIiB5MT0iMzAiIHkyPSIzNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiAvPjxsaW5lIHgxPSI3NTguNTkzNTY3MjUxNDYyIiB4Mj0iNzU4LjU5MzU2NzI1MTQ2MiIgeTE9IjUxNSIgeTI9IjUyMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiAvPjx0ZXh0IGZvbnQtZmFtaWx5PSJoZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIxMi42MDAwMDAwMDAwMDAwMDEiIHg9Ijc1OC41OTM1NjcyNTE0NjIiIHk9IjUyMCI+NjwvdGV4dD48bGluZSB4MT0iNzU4LjU5MzU2NzI1MTQ2MiIgeDI9Ijc1OC41OTM1NjcyNTE0NjIiIHkxPSIzMCIgeTI9IjM1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIC8+PGxpbmUgeDE9Ijg4NS42NDAzNTA4NzcxOTMiIHgyPSI4ODUuNjQwMzUwODc3MTkzIiB5MT0iNTE1IiB5Mj0iNTIwIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIC8+PHRleHQgZm9udC1mYW1pbHk9ImhlbHZldGljYSIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9IjEyLjYwMDAwMDAwMDAwMDAwMSIgeD0iODg1LjY0MDM1MDg3NzE5MyIgeT0iNTIwIj43PC90ZXh0PjxsaW5lIHgxPSI4ODUuNjQwMzUwODc3MTkzIiB4Mj0iODg1LjY0MDM1MDg3NzE5MyIgeTE9IjMwIiB5Mj0iMzUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgLz48bGluZSB4MT0iNzAiIHgyPSI3NSIgeTE9IjQ4OS45MTIyODA3MDE3NTQ0IiB5Mj0iNDg5LjkxMjI4MDcwMTc1NDQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgLz48dGV4dCBmb250LWZhbWlseT0iaGVsdmV0aWNhIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0iZW5kIiBkeT0iMy42MzYzNjM2MzYzNjM2MzY3IiB4PSI2NyIgeT0iNDg5LjkxMjI4MDcwMTc1NDQiPjI8L3RleHQ+PGxpbmUgeDE9IjkzOSIgeDI9IjkzNCIgeTE9IjQ4OS45MTIyODA3MDE3NTQ0IiB5Mj0iNDg5LjkxMjI4MDcwMTc1NDQiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgLz48bGluZSB4MT0iNzAiIHgyPSI3NSIgeTE9IjQyOC41MDg3NzE5Mjk4MjQ1NSIgeTI9IjQyOC41MDg3NzE5Mjk4MjQ1NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiAvPjx0ZXh0IGZvbnQtZmFtaWx5PSJoZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJlbmQiIGR5PSIzLjYzNjM2MzYzNjM2MzYzNjciIHg9IjY3IiB5PSI0MjguNTA4NzcxOTI5ODI0NTUiPjM8L3RleHQ+PGxpbmUgeDE9IjkzOSIgeDI9IjkzNCIgeTE9IjQyOC41MDg3NzE5Mjk4MjQ1NSIgeTI9IjQyOC41MDg3NzE5Mjk4MjQ1NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiAvPjxsaW5lIHgxPSI3MCIgeDI9Ijc1IiB5MT0iMzY3LjEwNTI2MzE1Nzg5NDc0IiB5Mj0iMzY3LjEwNTI2MzE1Nzg5NDc0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIC8+PHRleHQgZm9udC1mYW1pbHk9ImhlbHZldGljYSIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9ImVuZCIgZHk9IjMuNjM2MzYzNjM2MzYzNjM2NyIgeD0iNjciIHk9IjM2Ny4xMDUyNjMxNTc4OTQ3NCI+NDwvdGV4dD48bGluZSB4MT0iOTM5IiB4Mj0iOTM0IiB5MT0iMzY3LjEwNTI2MzE1Nzg5NDc0IiB5Mj0iMzY3LjEwNTI2MzE1Nzg5NDc0IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIC8+PGxpbmUgeDE9IjcwIiB4Mj0iNzUiIHkxPSIzMDUuNzAxNzU0Mzg1OTY0OTMiIHkyPSIzMDUuNzAxNzU0Mzg1OTY0OTMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgLz48dGV4dCBmb250LWZhbWlseT0iaGVsdmV0aWNhIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0iZW5kIiBkeT0iMy42MzYzNjM2MzYzNjM2MzY3IiB4PSI2NyIgeT0iMzA1LjcwMTc1NDM4NTk2NDkzIj41PC90ZXh0PjxsaW5lIHgxPSI5MzkiIHgyPSI5MzQiIHkxPSIzMDUuNzAxNzU0Mzg1OTY0OTMiIHkyPSIzMDUuNzAxNzU0Mzg1OTY0OTMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgLz48bGluZSB4MT0iNzAiIHgyPSI3NSIgeTE9IjI0NC4yOTgyNDU2MTQwMzUwNyIgeTI9IjI0NC4yOTgyNDU2MTQwMzUwNyIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiAvPjx0ZXh0IGZvbnQtZmFtaWx5PSJoZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJlbmQiIGR5PSIzLjYzNjM2MzYzNjM2MzYzNjciIHg9IjY3IiB5PSIyNDQuMjk4MjQ1NjE0MDM1MDciPjY8L3RleHQ+PGxpbmUgeDE9IjkzOSIgeDI9IjkzNCIgeTE9IjI0NC4yOTgyNDU2MTQwMzUwNyIgeTI9IjI0NC4yOTgyNDU2MTQwMzUwNyIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiAvPjxsaW5lIHgxPSI3MCIgeDI9Ijc1IiB5MT0iMTgyLjg5NDczNjg0MjEwNTI2IiB5Mj0iMTgyLjg5NDczNjg0MjEwNTI2IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIC8+PHRleHQgZm9udC1mYW1pbHk9ImhlbHZldGljYSIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9ImVuZCIgZHk9IjMuNjM2MzYzNjM2MzYzNjM2NyIgeD0iNjciIHk9IjE4Mi44OTQ3MzY4NDIxMDUyNiI+NzwvdGV4dD48bGluZSB4MT0iOTM5IiB4Mj0iOTM0IiB5MT0iMTgyLjg5NDczNjg0MjEwNTI2IiB5Mj0iMTgyLjg5NDczNjg0MjEwNTI2IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEiIC8+PGxpbmUgeDE9IjcwIiB4Mj0iNzUiIHkxPSIxMjEuNDkxMjI4MDcwMTc1NDUiIHkyPSIxMjEuNDkxMjI4MDcwMTc1NDUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgLz48dGV4dCBmb250LWZhbWlseT0iaGVsdmV0aWNhIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0iZW5kIiBkeT0iMy42MzYzNjM2MzYzNjM2MzY3IiB4PSI2NyIgeT0iMTIxLjQ5MTIyODA3MDE3NTQ1Ij44PC90ZXh0PjxsaW5lIHgxPSI5MzkiIHgyPSI5MzQiIHkxPSIxMjEuNDkxMjI4MDcwMTc1NDUiIHkyPSIxMjEuNDkxMjI4MDcwMTc1NDUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMSIgLz48bGluZSB4MT0iNzAiIHgyPSI3NSIgeTE9IjYwLjA4NzcxOTI5ODI0NTY0NSIgeTI9IjYwLjA4NzcxOTI5ODI0NTY0NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiAvPjx0ZXh0IGZvbnQtZmFtaWx5PSJoZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJlbmQiIGR5PSIzLjYzNjM2MzYzNjM2MzYzNjciIHg9IjY3IiB5PSI2MC4wODc3MTkyOTgyNDU2NDUiPjk8L3RleHQ+PGxpbmUgeDE9IjkzOSIgeDI9IjkzNCIgeTE9IjYwLjA4NzcxOTI5ODI0NTY0NSIgeTI9IjYwLjA4NzcxOTI5ODI0NTY0NSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxIiAvPjwvZz48dGV4dCBmb250LXNpemU9IjE0IiBmb250LWZhbWlseT0iaGVsdmV0aWNhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiB4PSI1MDQuNSIgeT0iMTkiPmRlbW88L3RleHQ+PHRleHQgZHk9IjQ5LjYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJoZWx2ZXRpY2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjUwNC41IiB5PSI1MjAiPkRheXM8L3RleHQ+PHRleHQgZHk9IjMuNjM2MzYzNjM2MzYzNjM2NyIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwLDMwLDI3NSkiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtZmFtaWx5PSJoZWx2ZXRpY2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjMwIiB5PSIyNzUiPkNvdW50PC90ZXh0Pjwvc3ZnPg==)