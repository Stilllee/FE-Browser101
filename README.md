# WEB APIs

## APIs

API(Application Programming Interfaces)란 프로그램끼리 소통하는 규칙으로, 서로의 기능을 활용하고 데이터를 주고받을 수 있게 해주는 도구이다.

### API의 특징

#### 표준화된 인터페이스

API는 표준화된 인터페이스를 제공하여, 서로 다른 프로그램들이 쉽게 연동할 수 있다.

#### 상호운용성

API를 사용하면 서로 다른 프로그램들이 상호운용할 수 있다.

#### 개방성

API는 개방적으로 제공되어, 누구나 자유롭게 사용할 수 있다.
<br>

## Web APIs

[MDN - Web API](https://developer.mozilla.org/ko/docs/Web/API)

### 대표적인 Web API

#### DOM APIs

웹 페이지에 있는 요소들을 생성 또는 삭제하거나 스타일을 조작하는 기능을 제공하는 API
Network APIs
서버와 통신할 수 있는 기능을 제공하는 API

#### Graphics APIs

Canvas 등 그래픽에 관련된 API

#### Audio/Video APIs

오디오나 비디오를 재생하는 등 멀티미디어에 관한 API

#### Device APIs

사용자의 온/오프라인 상태를 받아노는 등 디바이스의 상태정보를 받아올 수 있는 API

#### File APIs

사용자의 파일을 읽거나 저장하는 API

#### Storage APIs

사용자의 정보를 저장할 수 있는 storage에 관련된 API

### Web APIs Security

API는 사용자의 권한 요청이나, HTTPS(Hypertext Transfer Protocal Secure)를 요구할 수 있다. 이는 API를 사용하는 사용자가 적절한 권한을 가지고 있는지 확인하고, 데이터 전송 시 보안을 강화하기 위한 것이다.

따라서, Web API는 보안에 취약할 수 있으므로, 보안에 대한 고려가 필요하다.

예를 들어, HTTPS를 사용하여 데이터를 암호화하고, CORS를 사용하여 다른 출처의 리소스에 대한 접근을 제한해야 한다.

<br>

---

<br>

# Brower

## Window Size

#### `window.screen`
![DOfuYlNA3U](https://github.com/Stilllee/FE-Browser101/assets/108785772/1b4b2a1f-ec57-494d-88f3-0013bd42ea17)

- 모니터의 해상도, 화면 크기 등의 정보

#### `window.outer`
![chrome_ecstMtWh9q](https://github.com/Stilllee/FE-Browser101/assets/108785772/b98be89a-f32e-4dea-baa5-357a176b90f2)

- 브라우저 탭, 메뉴 바, 툴바 등을 포함한 전체 브라우저 창의 너비를 반환

#### `window.inner`
![chrome_xKWtasjs31](https://github.com/Stilllee/FE-Browser101/assets/108785772/f2e44272-c49c-4ec8-83a4-b19bcd60d647)

- 브라우저의 웹 페이지가 표시되는 영역의 너비를 반환

#### `documentElement.clientWidth`
![chrome_zDU6Ky0vMn](https://github.com/Stilllee/FE-Browser101/assets/108785772/a5864c0c-8398-455d-a408-3d3a131431a7)

- 웹 페이지의 내용이 표시되는 영역의 너비를 반환하며, 이 값은 스크롤 바를 제외한 값이다.

<br>

![chrome_O7uWEbDGS9](https://github.com/Stilllee/FE-Browser101/assets/108785772/f96f0fe5-fe9c-462e-9d74-5cd5f8f3beab)

<br>

## Coordinate

### 좌표 구하기

#### `Element.getBoundingClientRect()`

요소의 위치와 크기를 나타내는 객체를 반환하며 `left`, `top`, `right`, `bottom` 등의 속성이 있다.

### 좌표 나타내기

#### Client x, y

브라우저의 화면을 기준으로 한 좌표로, 브라우저의 스크롤 위치에 영향을 받는다.

#### Page x, y

웹 페이지를 기준으로 한 좌표로, 브라우저의 스크롤 위치에 영향을 받지 않는다.

![chrome_5TtuNUvkIo](https://github.com/Stilllee/FE-Browser101/assets/108785772/5e7794d7-eb84-4dca-a064-81406f01f030)

<br>

## Window Scrolling

![chrome_Y37eS0zYsi](https://github.com/Stilllee/FE-Browser101/assets/108785772/f8a98047-1c08-4241-ac85-2a4342394baa)

<br>

## Window load

![chrome_KcqP9cqndB](https://github.com/Stilllee/FE-Browser101/assets/108785772/f783986b-a17a-48d9-9972-421737479453)
