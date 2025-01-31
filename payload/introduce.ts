import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,
  top1: '협업과 소통으로 성장하는 개발자',
  top2: '배움과 도전에 주저하지 않는 개발자',
  top3: '유연성과 적응력을 갖춘 개발자',
  content1:
    '1년 2개월간의 재직 기간 동안 프로젝트의 전 과정을 경험하며 실무 기술과 협업 능력을 쌓았습니다. 특히, 국립금오공과대학교 종합정보시스템 웹 개발 프로젝트에서는 85개의 화면을 개발하고, 40건 이상의 사용자 피드백을 반영하여 사용자 경험을 개선하는 데 기여했습니다. 이 경험을 통해 형상 관리와 테스트의 중요성을 깊이 인식하고, 효율적인 코드 관리와 일정 조율, 시스템 안정성 확보에 필요한 역량을 강화할 수 있었습니다. 앞으로도 팀원들과의 원활한 소통과 협업을 통해 비즈니스 요구를 충족시키고, 안정적이면서도 효율적인 시스템 개발을 지향하며 지속적으로 성장해 나가겠습니다.',
  content2:
    '학원에서는 배우지 못한 전반적인 CS 기초 지식을 습득하기 위해 학원 수업과 병행하며 정보처리기사, SQLD 자격증을 취득하였으며, 현재는 REST API 설계에 필요한 기본 지식을 학습하고 이를 활용한 개발 프로젝트를 준비하고 있습니다. 이러한 노력을 통해 업무의 속도와 효율성을 향상하여 비즈니스 성장에 기여하고자 합니다.',
  content3:
    '변화에 대한 두려움 없이 새로운 기술과 도전을 수용하며, 다양한 환경과 요구사항에서도 빠르게 대응하고 항상 최고의 솔루션을 제공할 수 있는 유연성과 적응력을 갖춘 개발자가 되고자 합니다.',
  sign: 'Jongkwon Park',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
