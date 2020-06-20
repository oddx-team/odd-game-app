
# API Documents

## API Parameter and response

#### GLOBAL EXCEPTION(occurs for all APIs):

- status=400, msg="invalid-params"
- status=400, msg="duplicated-requests"

### /api/authenticate/me

- description: get user info
- method: GET
- response:

if not joined:

```json
{
  "account_id": 123124125,
  "language": "en",
  "joined": "false"
}
```

if already joined:

```json
{
  "account_id": 123124125,
  "language": "en",
  "joined": "true",
  "room_id": 123
}
```

### /api/authenticate/logout

- description: logout game
- method: POST
- response:
```json
{}
```

### /api/authenticate/register

- description: register new user (no password)
- method: POST
- payload:

```json
{
  "username": "admin"
}
```
Response:
```json
{
  "token": "123dfsg3423"
}
```

### /api/chats

- description: get global chat
- method: GET
- response:

```json
[ 
  {
    "user": "admin",
    "message": "New message",
    "time": 123124,
    "online": true
  }
]
```

### /api/cards

- description: get list of all cards
- method : GET
- response:

```json
[
  {
    "id": 1,
    "text": "Abc has ___ XYZ",
    "color": "black",
    "gaps": 1
  },
  {
    "id": 2,
    "text": "____: Hours of fun. Easy to use. Perfect for ____!",
    "color": "black",
    "gaps": 2
  },
  {
    "id": 3,
    "text": "A Japanese toaster you can fuck.",
    "color": "white"
  }
]
```

- Note: White cards don't have any gaps

### /api/rooms/<:language>

- description: Get all rooms
- method : GET
- response:

```json
[
  {
    "id": 1,
    "name": "Room 1",
    "host": "player1",
    "total": 10,
    "current": 3,
    "guest": 10,
    "status": 'Not started',
  }
]
```

- Note:
- status: **Playing/Not started**

### /api/rooms/<:language>

- description: Create a new room
- method: POST
- payload:

```json
{
  "name": "Room-1",
  "size": "5"
}
```
Response
```json
{ "_id": "2342fdsw"}
```
- Exception:
- duplicated-room-name

### /api/room/join

- description: Join a room
- method: POST
- payload:

```json
{
  "operation": "join_room",
  "room_id": 1,
}
```

Response:

```json
{
  "joined": true,
  "room_id": 1,
  "collection_cards": [1, 2, 3, 4, 5, 6, 7],
  "display_cards": [
    {
      "id": 9,
      "vote": 0
    },
    {
      "id": 10,
      "vote": 0
    }
  ],
  "mode": 1
}
```

- Exceptions:
- already-joined
- wrong-password
- Note: - Open room has no password -> password is an empty string - mode: 0 -> spectate, 1 -> active player

### /api/room/view

- description: Spectate a room
- method: POST
- payload:

```json
{
  "operation": "spectate_room",
  "room_id": 1,
}
```

Response:

```json
{
  "joined": true,
  "room_id": 1,
  "mode": 0
}
```

- Exceptions:
- already-joined
- wrong-password
- Note: - Open room has no password -> password is an empty string - mode: 0 -> spectate, 1 -> active player

### /api/room/quit

- description: Quit a room
- method: POST
- payload:

```json
{
  "operation": "quit_room",
  "room_id": 1,
}
```

Response:
```json
{
  "joined": false
}
```

- Exceptions:
- not-joined

### /api/rooms/:<room_id>/chats

- description: get chat for game room
- method: GET
- response:

```json
[
  {
    "user": "admin",
    "message": "New message",
    "time": 123124,
    "online": true
  }
]
```

- Note:
- exception: not-joined

### /api/rooms/:<room_id>/leaderboard

- description: Get leaderboard
- method: GET
- response:

```json
[
  {
    "name": "player1",
    "score": 1234,
    "is_host": 0
  }
]
```

- Note:
- is_host: 0 -> normal players, 1 -> room host

### /api/rooms/:<room_id>/cards

- description: confirm deal cards
- method : POST
- payload:

```json
{
  "deal_cards": [1, 2],
}
```

- response:

```json
{
  "collection_cards": [3,4,5,6,7],
  "display_cards": [
    {
      "id": 9,
      "vote": 0
    },
    {
      "id": 10,
      "vote": 0
    },
    {
      "id": 1,
      "vote": 0
    },
    {
      "id": 2,
      "vote": 0
    }
  ],
},
```

- Exception:
- not-joined
- cards-not-exist
- already-dealt

### /api/rooms/:<room_id>/vote

- description: vote for a card
- method: PUT
- payload:

```json
{
  "operation": "vote_card",
  "card_id": 9,
}
```

- response:

```json
{
  "display_cards": [
    {
      "id": 9,
      "vote": 1
    },
    {
      "id": 10,
      "vote": 0
    }
  ]
}
```

- Exception:
- not-joined
- already-voted

### /api/rooms/:<room_id>/next

- description: proceed to the next round
- method: GET
- response:

```json
{
  "display_cards": [],
  "collection_cards": [1, 2, 3, 4, 5, 6, 7],
  "leaderboard": [
    {
      "name": "player1",
      "score": 1234,
      "is_host": 0
    }
  ]
}
```

- Exception:
- not-joined
- already-voted

### /api/rooms/:<room_id>/result

- description: get result of the current round
- method: GET
- response:

```json
{
  "winner": {
    "name": "admin",
    "score": 10000
  },
  "leaderboard": [
    {
      "name": "player1",
      "score": 1234,
      "is_host": 0
    }
  ]
}
```

- Exception:
- not-joined