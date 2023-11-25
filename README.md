# Micro-servicio de Videos

- Read Video

### Modelo
- id: string;
- title: string;
- url: string;
- category: string;
- duration: string;
- sets: string;
- reps: string;
- equipments: strings[];

### GET BY ID
*URL* : http://host/api/video/id/<id>

### GET BY ID (BATCH)
*URL*: http://host/api/video/batch?id=<id>&id=<id>
