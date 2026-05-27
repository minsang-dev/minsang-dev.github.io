import ProjectCard from "./project-card"
import { CodeBlock } from "./troubleshooting-dialog"

const PROJECTS = [
  {
    id: 5,
    title: "ANVI - 온디바이스 AI 기반 시험 부정행위 감독 솔루션",
    period: "2026.04 - 2026.05",
    role: "AI & Android & Infra",
    techStack: ["Kotlin", "Jetpack Compose", "LiteRT", "Gemma", "YOLO", "MediaPipe", "Spring Boot", "Docker", "AWS EC2"],
    situation: "기존의 비대면 시험 감독은 서버로 영상을 실시간 전송하여 심각한 개인정보 침해 논란과 서버 유지비용 폭증 문제를 안고 있었습니다.",
    task: "네트워크 지연과 서버 인프라 의존성을 없애고, 사용자 디바이스 자체에서 동작하는 '온디바이스 AI 기반'의 프라이버시 친화적 부정행위 감지 파이프라인을 구축해야 했습니다.",
    action: "1. ML Kit OCR에 4-Gate 검증 로직을 결합하고, ArcFace 모델을 통해 온디바이스 본인 인증(신원 확인) 기능을 구현했습니다.\n2. VLM과 YOLO를 연계한 2단계 감지 상태 머신을 설계하여 배터리와 연산량을 최적화했습니다.\n3. 얼굴 인식 시 발생하는 신분증 인쇄물과 실시간 카메라 간의 피처 불일치(Feature Mismatch)를 5프레임 통계 검증으로 보정했습니다.",
    result: "서버 유지비용을 획기적으로 절감하며 실시간 감독 기능을 확보했습니다. 또한 본인 인증 인식 속도를 평균 0.2초로 단축하고 OOM 문제를 원천 차단하여 높은 안정성을 입증했습니다.",
    image: "projects/project5-thumbnail.png",
    troubleshooting: {
      title: "온디바이스 본인인증 파이프라인: 피처 임베딩(Feature Embedding) 불일치 보정 및 추론 연산 경량화",
      date: "2026-05-04",
      environment: "Kotlin, Jetpack Compose, ML Kit OCR, ArcFace(TFLite)",
      sections: [
        {
          title: "1. 기술적 난관 (Technical Challenges)",
          content: (
            <div className="space-y-4">
              <div>
                <strong>1.1 신분증 인식 시 잦은 OOM 및 연산 병목</strong>
                <p className="text-sm mt-1">
                  초기 VLM 기반 신분증 인식 시, 무거운 모델 연산량으로 인해 평균 13.2초의 지연 시간이 발생하고 안드로이드 기기에서 빈번한 메모리 부족(OOM) 현상이 나타났습니다.
                </p>
              </div>
              <div>
                <strong>1.2 인쇄물과 실시간 카메라 간의 피처 공간(Feature Space) 불일치</strong>
                <p className="text-sm mt-1">
                  ArcFace 모델로 신분증 사진(인쇄물)과 실시간 카메라의 실물을 대조할 때, 화질 열화 및 환경 차이로 인한 특징 벡터(Feature Vector) 왜곡이 발생하여 코사인 유사도가 급감하는(평균 0.36) 문제가 있었습니다.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "2. 문제 해결 (Problem Solving)",
          content: (
            <div className="space-y-4">
              <div>
                <strong>2.1 정규식 파싱 + 4-Gate 검증 파이프라인 도입</strong>
                <p className="text-sm mt-1">
                  VLM을 배제하고 경량화된 <code>ML Kit OCR</code>에 고도화된 정규 표현식과 <strong>4-Gate 검증 로직(형식, 길이, 유효성 교차 검증 등)</strong>을 결합하여 텍스트를 추출하도록 전면 개편했습니다. 오인식을 방지하고 불필요한 GPU 연산을 줄여 메모리 안정성을 확보했습니다.
                </p>
              </div>
              <div>
                <strong>2.2 통계적 다중 검증 로직 도입</strong>
                <p className="text-sm mt-1">
                  이러한 피처 불일치를 보정하기 위해 단순히 단일 프레임 임계값을 조정하는 대신, 연속된 <strong>5프레임의 코사인 유사도</strong>를 수집하여 중앙값, 최소값, 편차를 종합적으로 분석하는 다중 검증 알고리즘을 도입했습니다.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "3. 결과 및 회고 (Lessons Learned)",
          content: (
            <ul className="list-disc list-inside space-y-2 bg-slate-100 dark:bg-slate-900 p-4 rounded-md text-sm">
              <li>
                <strong>성능 최적화:</strong> 신분증 처리 속도를 13.2초에서 <strong>평균 0.2초</strong>로 대폭 단축시켰고, 지연 시간과 기기 발열 및 OOM 문제를 완전히 해결했습니다.
              </li>
              <li>
                <strong>인식 정확도 개선:</strong> 피처 왜곡에 강건한(Robust) 알고리즘을 구축하여 까다로운 본인 인증 환경에서도 보안 마진을 지키며 <strong>100% 인증 성공률</strong>을 달성했습니다.
              </li>
            </ul>
          ),
        },
      ],
    },
  },
  {
    id: 4,
    title: "DONTTAz - 월급 로그아웃을 막아주는 나만의 비밀금고",
    period: "2026.03",
    role: "Backend Engineer",
    techStack: ["Java 17", "Spring Boot", "JPA", "MySQL", "RabbitMQ"],
    situation: "외부 오픈뱅킹 API와 내부 서비스 간의 트랜잭션 분리로 인해, 네트워크 지연 시 심각한 데이터 불일치(결제는 성공했으나 내부 잔액 미반영) 위험이 있었습니다.",
    task: "서비스 간 강결합을 줄이고 응답 속도를 유지하면서도, 장애 발생 시 1초 이내에 결제 상태를 원상 복구(롤백)할 수 있는 분산 트랜잭션 시스템을 구축해야 했습니다.",
    action: "1. RabbitMQ를 도입하여 비동기 메시징 기반의 Choreography Saga 패턴을 설계했습니다.\n2. 결제 실패 시 @TransactionalEventListener를 통해 취소 이벤트를 즉각 발행하고 보상 트랜잭션을 실행했습니다.\n3. 예외 처리 전용 큐(Exception Queue)와 백오프 기반 재시도 로직을 구성하여 메시지 유실을 원천 차단했습니다.",
    result: "결제 실패 시 1초 이내 자동 롤백을 구현하여 결제 정합성 불일치 0건을 달성했습니다. 동기식 대비 응답 속도를 개선하며 초당 1,000건의 부하 환경에서도 안정적인 무결성을 입증했습니다.",
    image: "projects/project4-thumbnail.png",
    troubleshooting: {
      title: "분산 트랜잭션 정합성 보장: RabbitMQ 기반 비동기 보상 트랜잭션(Saga) 구축",
      date: "2026-03-26",
      environment: "Spring Boot 3.x, JPA, MySQL 8.0, RabbitMQ",
      sections: [
        {
          title: "1. 문제 상황 (Problem)",
          content: (
            <div className="space-y-4">
              <p className="text-sm">
                외부 결제망(오픈뱅킹 API)과 내부 DB 간의 상태를 동기화하는 과정에서 트랜잭션이 분리되어 있어, 네트워크 지연이나 내부 서버 에러 시 <strong>데이터 불일치(결제는 성공했으나 내부 잔액은 미반영)</strong> 문제가 발생할 위험이 컸습니다.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>성능 저하 우려:</strong> 기존의 동기식 2PC(2-Phase Commit) 방식은 응답 지연과 병목 현상을 유발.</li>
                <li><strong>롤백의 어려움:</strong> 외부 API 호출이 이미 완료된 상태에서 내부 DB 에러 발생 시, 이를 되돌릴 자동화된 수단 부재.</li>
              </ul>
            </div>
          ),
        },
        {
          title: "2. 해결 방법 (Solution)",
          content: (
            <div className="space-y-4">
              <div>
                <strong>2.1 Choreography Saga 패턴 및 보상 트랜잭션 도입</strong>
                <p className="text-sm mt-1">
                  RabbitMQ를 활용하여 비동기 메시징 기반의 이벤트 주도 아키텍처를 설계했습니다. 결제 실패 혹은 내부 DB 업데이트 실패 시 <code>@TransactionalEventListener</code>를 통해 즉각 <strong>'결제 취소 이벤트'</strong>를 발행하고, 컨슈머가 이를 수신해 보상 트랜잭션(오픈뱅킹 결제망 취소 API 호출)을 실행하도록 했습니다.
                </p>
                <CodeBlock label="PaymentEventListener.java">
                  {`@TransactionalEventListener(phase = TransactionPhase.AFTER_ROLLBACK)
public void handlePaymentFailure(PaymentFailedEvent event) {
    // 결제 실패(롤백) 시 RabbitMQ로 보상 트랜잭션 메시지 발행
    rabbitTemplate.convertAndSend(
        "payment.exchange", 
        "payment.rollback", 
        new RollbackMessage(event.getPaymentId())
    );
}`}
                </CodeBlock>
              </div>
              <div>
                <strong>2.2 예외 처리 전용 큐(Exception Queue) 및 재시도 메커니즘</strong>
                <p className="text-sm mt-1">
                  보상 트랜잭션마저 네트워크 오류로 실패할 경우를 대비하여 <code>예외 처리 전용 큐(Exception Queue)</code>를 구성했습니다. 처리 실패 메시지를 안전하게 격리한 뒤, 백오프(Back-off) 알고리즘을 적용한 자동 재처리 로직을 추가하여 메시지 유실을 완벽히 차단했습니다.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "3. 결과 (Result)",
          content: (
            <ul className="list-disc list-inside space-y-2 bg-slate-100 dark:bg-slate-900 p-4 rounded-md text-sm">
              <li>
                <strong>안정적인 결제 정합성 확보:</strong> 결제 실패 시 1초 이내에 자동 롤백되는 체계를 확립하여, 트랜잭션 불일치 건수를 0건으로 유지했습니다.
              </li>
              <li>
                <strong>가용성과 성능 극대화:</strong> 외부 결제망과의 강결합을 비동기 메시징으로 풀어내어 동기식 처리 대비 결제 응답 속도를 대폭 개선했으며, 초당 1,000건의 부하 테스트에서도 99.9% 무결성을 증명했습니다.
              </li>
            </ul>
          ),
        },
      ],
    },
  },
  {
    id: 3,
    title: "SHOPPY - 실시간 소셜 쇼핑 및 정산 플랫폼",
    period: "2026.01 - 2026.02",
    role: "Backend Engineer (Infra)",
    techStack: ["Java 17", "Spring Boot", "JPA", "MySQL", "OpenVidu (WebRTC)", "AWS EC2", "Docker", "Jenkins", "Nginx"],
    situation: "비대면 쇼핑 시 소통의 한계와 복잡한 N분의 1 정산 과정의 번거로움을 해결해야 했습니다.",
    task: "WebRTC 기반의 실시간 화상 공유 인프라를 구축하고, 1원의 오차도 없는 정밀한 N분의 1 정산 시스템을 개발하는 것이 목표였습니다.",
    action: "1. OpenVidu 및 Kurento Media Server를 Docker 컨테이너로 온프레미스 배포하고, 네트워크 최적화를 통해 연결 성공률을 높였습니다.\n2. BigDecimal을 사용하여 부동소수점 오차 없는 정산 로직을 구현하고 나머지 분배 알고리즘을 적용했습니다.\n3. Jenkins와 Webhook을 연동하여 백엔드/프론트엔드 CI/CD 자동화 파이프라인을 구축했습니다.",
    result: "외부 네트워크에서도 안정적인 화상 통화 환경을 구축했으며, 어떠한 금액 산정에서도 오차가 발생하지 않는 무결한 정산 시스템을 완성했습니다.",
    image: "projects/project3-thumbnail.png",
    troubleshooting: {
      title: "WebRTC 인프라 네트워크 이슈 및 정산 금액 무결성 보장",
      date: "2026-02-15",
      environment: "OpenVidu, Docker, AWS EC2, Spring Boot 3.x, MySQL",
      sections: [
        {
          title: "1. 기술적 난관 (Technical Challenges)",
          content: (
            <div className="space-y-4">
              <div>
                <strong>1.1 WebRTC 연결 실패 (ICE Connection Failed)</strong>
                <p className="text-sm mt-1">
                  Docker 컨테이너 내부에서 실행되는 OpenVidu 서버가 클라이언트(브라우저)와 P2P 연결을 시도할 때, 사설 IP(Private IP)를 반환하여 외부 네트워크에서의 접근이 차단되는 현상이 발생했습니다.
                </p>
              </div>
              <div>
                <strong>1.2 정산 금액의 무결성 문제 (1원의 차이)</strong>
                <p className="text-sm mt-1">
                  10,000원을 3명이 나눌 경우 3,333.33...원이 되어, 단순 합산 시 9,999원이 되는 오차가 발생했습니다. 금융 관련 기능에서 이러한 오차는 서비스 신뢰도 하락의 원인이 됩니다.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "2. 문제 해결 (Problem Solving)",
          content: (
            <div className="space-y-4">
              <div>
                <strong>2.1 Host Network Mode 및 Public IP 명시</strong>
                <p className="text-sm mt-1">
                  <code>docker-compose.yml</code>에서 OpenVidu 및 KMS 컨테이너의 네트워크 모드를 <code>host</code>로 설정하여 호스트의 네트워크 스택을 사용하게 하고, AWS EC2의 Public IP를 명시적으로 주입하여 Signaling 과정에서 정확한 후보 주소가 교환되도록 구성했습니다. 또한 Nginx에 Let's Encrypt 인증서를 마운트하여 WebRTC 통신의 필수 조건인 SSL 환경을 확보했습니다.
                </p>
              </div>
              <div>
                <strong>2.2 나머지 할당 (Remainder Allocation) 알고리즘 도입</strong>
                <p className="text-sm mt-1">
                  <code>BigDecimal</code> 타입을 활용하여 나눗셈 계산 중 발생하는 나눌 수 없는 나머지 금액을 추출하고, 이 나머지 금액을 첫 번째 참여자에게 몰아주는 보정 로직을 추가하여 정합성을 맞췄습니다.
                </p>
                <CodeBlock label="SettlementService.java">
                  {`BigDecimal amountToPayPerPerson = totalItemPrice.divide(participantCount, 0, RoundingMode.FLOOR);
BigDecimal totalUserPay = amountToPayPerPerson.multiply(participantCount);
BigDecimal remainder = totalItemPrice.subtract(totalUserPay);

// 첫 번째 멤버에게 나머지 가산하여 오차 제거
allocation.setDiffAmount(isFirstMember ? remainder : BigDecimal.ZERO);`}
                </CodeBlock>
              </div>
            </div>
          ),
        },
        {
          title: "3. 결과 및 회고 (Lessons Learned)",
          content: (
            <ul className="list-disc list-inside space-y-2 bg-slate-100 dark:bg-slate-900 p-4 rounded-md text-sm">
              <li>
                <strong>인프라 및 네트워크 이해도 향상:</strong> 복잡한 WebRTC 인프라를 Docker로 컨테이너화하고 SSL 및 네트워크 구성을 직접 다루면서 OSI 7 계층과 프로토콜에 대한 깊은 이해를 얻었습니다.
              </li>
              <li>
                <strong>금융/정산 비즈니스 로직의 극의:</strong> 금전적 가치를 다루는 로직에서는 단순한 나눗셈이 아닌, 엣지 케이스까지 고려한 견고한 비즈니스 로직 설계(BigDecimal 활용)가 필수적임을 체감했습니다.
              </li>
            </ul>
          ),
        },
      ],
    },
  },
  {
    id: 2,
    title: "ZIP-CHACK - 꼼꼼하게 따져보는 원룸 리뷰 & 정보 플랫폼",
    period: "2025.12",
    role: "Backend Engineer",
    techStack: ["Java 17", "Spring Boot", "Spring Security", "JPA", "WebSocket", "MySQL", "AWS S3", "Docker", "Vue 3"],
    situation: "실거주자의 솔직한 리뷰와 AI 상권 분석 기능을 결합하여, 원룸/오피스텔 정보를 투명하게 제공하는 부동산 플랫폼이 필요했습니다.",
    task: "매물의 생애주기를 관리하고 AWS S3를 이용한 이미지 파이프라인 구축, 그리고 WebSocket 기반 실시간 상태 동기화 채팅 시스템을 구현하는 역할을 맡았습니다.",
    action: "1. ListingService에 매물 생애주기 관리를 구현하고 @Transactional로 데이터 정합성을 보장했습니다.\n2. S3Service로 이미지 업로드/삭제 파이프라인을 구축하고 UUID 및 이중 확장자 검증을 적용해 보안을 강화했습니다.\n3. 매물 상태와 채팅방 상태가 실시간 동기화되도록 상태 머신 기반 채팅 시스템을 설계하고 STOMP 메시징을 연동했습니다.",
    result: "도메인 간 강결합을 통한 트랜잭션 보장으로 상태 불일치 문제를 원천 차단했으며, 서버-스토리지 분리 아키텍처를 완성했습니다.",
    image: "projects/project2-thumbnail.png",
    troubleshooting: {
      title: "매물 상태와 채팅 프로세스의 정합성 보장 및 이미지 관리 최적화",
      date: "2025-12-25",
      environment: "Spring Boot 3.5.9, JPA, MySQL 8.0, AWS S3, WebSocket",
      sections: [
        {
          title: "1. 기술적 난관 (Technical Challenges)",
          content: (
            <div className="space-y-4">
              <div>
                <strong>1.1 매물과 채팅 상태의 불일치</strong>
                <p className="text-sm mt-1">
                  매물 거래가 완료(COMPLETED)되었음에도 채팅방에서는 여전히 거래 시도가 가능하거나, 반대로 채팅방이 종료되었는데 매물이 판매 중으로 남아있는 상태 불일치 문제가 발생했습니다.
                </p>
              </div>
              <div>
                <strong>1.2 비효율적이고 불안전한 커스텀 이미지 관리</strong>
                <p className="text-sm mt-1">
                  초기에는 로컬 디스크에 이미지를 직접 저장하여 유실 위험과 용량 압박이 있었고, 악성 스크립트 파일이 업로드될 수 있는 보안 위협이 존재했습니다.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "2. 문제 해결 (Problem Solving)",
          content: (
            <div className="space-y-4">
              <div>
                <strong>2.1 도메인 간 강한 결합을 통한 트랜잭션 보장</strong>
                <p className="text-sm mt-1">
                  <code>@Transactional</code> 내에서 채팅방 상태와 매물을 동시에 업데이트하여 원자성(Atomicity)을 확보했습니다. 실패 시 전체 롤백을 수행하고, 완료된 매물에 대해서 새로운 채팅 신청을 차단하는 방어 로직을 추가했습니다.
                </p>
                <CodeBlock label="ChatService.java">
                  {`@Transactional
                public void completeChat(Long roomId, Long userId) {
                    ChatRoom room = chatRoomMapper.findById(roomId);

                    // 1. 채팅방 상태 변경
                    room.updateStatus(ChatRoomStatus.COMPLETED);
                    chatRoomMapper.update(room);

                    // 2. 매물 상태 자동 동기화
                    Listing listing = listingMapper.findById(room.getListingId());
                    listing.setStatus(ListingStatus.COMPLETED);
                    listingMapper.update(listing); // 한 트랜잭션 내 처리
                }`}
                </CodeBlock>
              </div>
              <div>
                <strong>2.2 안전한 AWS S3 이미지 파이프라인 구축</strong>
                <p className="text-sm mt-1">
                  MIME 타입 및 확장자를 이중 검증하는 화이트리스트 방식을 적용하고, 파일명을 UUID로 강제 변환하여 S3 서버에 업로드하는 Stateless 아키텍처를 적용했습니다. 저장소와 애플리케이션의 결합도를 낮추고 데이터 유실을 방지했습니다.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "3. 결과 및 회고 (Lessons Learned)",
          content: (
            <ul className="list-disc list-inside space-y-2 bg-slate-100 dark:bg-slate-900 p-4 rounded-md text-sm">
              <li>
                <strong>데이터 정합성:</strong> 여러 도메인(채팅-매물)이 얽힌 비즈니스 로직에서는 트랜잭션 경계를 명확히 설정해야 시스템의 무결성을 유지할 수 있음을 체감했습니다.
              </li>
              <li>
                <strong>스토리지 아키텍처:</strong> 서버 아키텍처에 클라우드 스토리지(S3)를 도입함으로써 컨테이너 재시작이나 스케일 아웃에 구애받지 않는 안정적인 데이터 관리가 가능해졌습니다.
              </li>
            </ul>
          ),
        },
      ],
    },
  },
  {
    id: 1,
    title: "ReVibe - 한정판 스니커즈 리셀 플랫폼",
    period: "2024.12 - 2025.01",
    role: "Backend Engineer (Auth & Concurrency Control)",
    techStack: ["Spring Boot", "Spring Security", "JWT", "Redis", "Redisson", "MySQL", "Docker"],
    situation: "대규모 트래픽이 예상되는 리셀 플랫폼에서 사용자 인증의 보안성과 선착순 이벤트의 안정성 확보가 시급했습니다.",
    task: "JWT 기반의 보안 인증 시스템 구축 및 수만 건의 동시 쿠폰 발급 요청 시 데이터 부정합을 방지하고 응답 속도를 최적화하는 것이 주 목표였습니다.",
    action: "1. Spring Security와 JWT를 연동하여 인증/인가를 구현하고, 카카오 소셜 로그인을 통해 접근성을 높였습니다.\n2. 선착순 쿠폰 발급의 동시성 제어를 위해 Synchronized, 비관적 락 등을 거쳐 최종적으로 Redisson 분산락을 도입했습니다.\n3. @Transactional과 락 해제 시점의 불일치를 해결하기 위해 분산락 로직을 AOP화하여 데이터 정합성을 보장했습니다.",
    result: "10,000건의 동시 발급 테스트를 성공적으로 완료했으며, Redisson 도입으로 기존 방식 대비 처리 속도를 약 60% 이상 향상시켰습니다.",
    image: "projects/project1-thumbnail.png",
    troubleshooting: {
      title: "선착순 쿠폰 발급 - Redisson 분산락 도입으로 정합성 및 성능 개선",
      date: "2024-09-20",
      environment: "Spring Boot 3.x, Spring Security 6, Redis, Redisson, MySQL",
      sections: [
        {
          title: "1. 문제 상황 (Troubleshooting Cases)",
          content: (
            <div className="space-y-4">
              <p className="text-sm">
                초기에는 <code>synchronized</code> 키워드를 사용해 여러 스레드가 동시에 접근하는 것을 제한했지만, 단일 서버 환경에 국한되는 문제와 <code>@Transactional</code> 상호작용 이슈로 인해 동시성 제어가 완벽하지 않았습니다.
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>경합 조건(Race Condition):</strong> 쿠폰 수량 감소 시 여러 스레드가 동일한 재고를 읽어 초과 발급 발생.</li>
                <li><strong>트랜잭션 커밋 이슈:</strong> <code>@Transactional</code>이 로직 수행 후 커밋되기 전 락이 먼저 풀려버리는 불일치 문제 확인.</li>
              </ul>
            </div>
          ),
        },
        {
          title: "2. 기술적 정지 및 의사 결정 (Decision Making)",
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-lg">
                  <h5 className="font-bold text-sm mb-1 line-through opacity-50">초기 시도: Synchronized/Pessimistic Lock</h5>
                  <p className="text-xs">데이터 정합성은 확보되나, 무한 대기 현상 및 데드락 우려와 성능 저하(10s 이상) 발생.</p>
                </div>
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <h5 className="font-bold text-sm mb-1 text-primary">최종 선택: Redisson Distributed Lock</h5>
                  <p className="text-xs">분산 환경에서도 일관성을 보장하며, 스핀 락 방식이 아닌 Pub/Sub 방식을 사용해 부하를 최소화하고 성능을 크게 개선.</p>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "3. 해결 방법 및 결과 (Implementation & Result)",
          content: (
            <div className="space-y-4">
              <p className="text-sm">
                분산락 로직을 <strong>AOP(Aspect-Oriented Programming)</strong>화하여 비즈니스 로직과 분리하고, 트랜잭션 수명 주기와 조절함으로써 정합성 문제를 근본적으로 해결했습니다.
              </p>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-md border border-slate-200 dark:border-slate-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded">성능 향상 결과</span>
                </div>
                <ul className="text-sm space-y-1">
                  <li><strong>Synchronized:</strong> 10s 609ms (100명 요청)</li>
                  <li><strong>Pessimistic Lock:</strong> 4s 406ms (100명 요청)</li>
                  <li><strong>Redisson (AOP):</strong> <strong>4.5s (10,000명 요청 처리)</strong></li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground italic">"1만 개 쿠폰 발급 테스트 시 정합성 100% 보장 및 성능 약 60% 개선"</p>
            </div>
          ),
        },
      ],
    },
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 view-trigger">
          <h2 className="text-4xl font-bold mb-3 text-foreground">주요 프로젝트</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">
            각 프로젝트에서 직면한 문제, 해결 과정, 그리고 실제 성과를 정리했습니다.
          </p>
          <div className="h-1.5 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both view-trigger"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
