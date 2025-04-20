import nextConfig from '../../../next.config';

export const Paths = {
  root: '/',
  maintenance: '/maintenance',
  // auth
  auth: {
    login: '/auth/login',
    resetPassword: '/auth/reset-password',
  },
  user: {
    root: '/user',
    list: '/user/list',

    roleList: {
      root: '/user/client',
      list: '/user/role/list',
      edit: (id) => `/user/role/${id}/edit-permission`,
    },
    permissionList: {
      root: '/user/permission',
      list: '/user/permission/list',
    },
    permissionTypeList: {
      root: '/user/permission-type',
      list: '/user/permission-type/list',
    },
  },
  provider: {
    root: '/provider',
    list: '/provider/list',
  },
  workerProfile: {
    root: '/worker-profile',
    list: '/worker-profile/list',
    toCreate: '/worker-profile/create',
    toUpdate: (profileId: string) => `/worker-profile/update/${profileId}`,
    toView: (profileId: string) => `/worker-profile/view/${profileId}`,
  },
  gallery: {
    root: '/gallery',
    list: '/gallery/list',
  },
  countries: {
    root: '/countries',
    list: '/countries/list',
  },
  city: {
    root: '/city',
    list: '/city/list',
  },
  visaCategories: {
    root: '/visa-categories',
    list: '/visa-categories/list',
  },
  job: {
    root: '/job',
    list: '/job/list',
    sector: {
      root: '/job/sector',
      list: '/job/sector/list',
    },
    role: {
      root: '/job/role',
      list: '/job/role/list',
    },
  },
  travelPurpose: {
    root: '/travel-purpose',
    list: '/travel-purpose/list',
  },
  skills: {
    root: '/skill',
    list: '/skill/list',
  },
  course: {
    root: '/course',
    list: '/course/list',
    category: {
      root: '/course/category',
      list: '/course/category/list',
    },
    instructor: {
      root: '/course/instructor',
      list: '/course/instructor/list',
    },
    curriculum: {
      root: '/course/curriculum',
      list: '/course/curriculum/list',
    },
    curriculumLesson: {
      root: '/course/curriculum-lesson',
      list: '/course/curriculum-lesson/list',
    },
    faq: {
      root: '/course/faq',
      list: '/course/faq/list',
    },
  },
  language: {
    root: '/language',
    list: '/language/list',
  },
  profession: {
    root: '/profession',
    list: '/profession/list',
  },
  requirements: {
    root: '/requirements',
    list: '/requirements/list',
  },
  requirementTypes: {
    root: '/requirement-types',
    list: '/requirement-types/list',
  },
  certification: {
    root: '/certification',
    list: '/certification/list',
  },

  // Checklist Builder routes
  checklist: {
    root: 'assessment',
    templateList: '/assessment/template/list',

    questionList: '/assessment/question/list',
    questionCreate: '/assessment/question/create',
    toAssessmentQuestionUpdate: (id: string) => `/assessment/question/update/${id}`,
    toAssessmentQuestionDetails: (id: string) => `/assessment/question/${id}`,

    ChecklistQuestionSets: '/assessment/question-sets/checklist',
    toChecklistQuestionSetsDetails: (id: string) => `/assessment/question-sets/checklist/${id}`,
    toChecklistQuestionSetsPreview: (id: string) => `/assessment/question-sets/${id}/preview`,

    EligibilityQuestionSets: '/assessment/question-sets/eligibility',
    toEligibilityQuestionSetsDetails: (id: string) => `/assessment/question-sets/eligibility/${id}`,

    AssesmentQuestionSets: '/assessment/question-sets/assesment',
    toAssesmentQuestionSetsDetails: (id: string) => `/assessment/question-sets/assesment/${id}`,

    commonQuestionSets: '/assessment/common-question-sets',
    toCommonQuestionSetsDetails: (id: string) => `/assessment/common-question-sets/${id}`,

    userQuestionSets: '/assessment/user-question-sets',
    toUserQuestionSetsDetails: (id: string) => `/assessment/user-question-sets/${id}`,

    requestCallBacks: '/assessment/request-callbacks',
  },

  globalConfig: {
    root: '/global-configs',
  },
  customFields: {
    root: '/custom-field',
    list: '/custom-field/list',
  },
};

// is used for access those paths which are not restricted by authentication & not wrap the layout
export const publicPaths = [Paths.auth.login, Paths.maintenance, Paths.auth.resetPassword];

export const authPaths = [...getAllStaticPaths(Paths.auth)];

export const securedPathsPrefix = [Paths.root];
export const securedPaths = [];

export function pathToUrl(path: string): string {
  path = path.startsWith('/') ? path : `/${path}`;
  return `${location?.origin}${path}`;
}

export function getAllStaticPaths(obj: Record<string, any>) {
  const paths = [];

  function traverse(o: Record<string, any>) {
    for (const key in o) {
      if (typeof o[key] === 'string') {
        paths.push(o[key]);
      } else if (typeof o[key] === 'function') {
        // Skip functions that generate paths based on arguments
        continue;
      } else {
        traverse(o[key]);
      }
    }
  }

  traverse(obj);
  return paths;
}

export const pathByNextConfig = (x: string) => (x.endsWith('/') ? x : nextConfig.trailingSlash ? x + '/' : x);

export const checkPathIsInAuth = (pathName: string): boolean => {
  pathName = pathByNextConfig(pathName);
  return authPaths.some((x) => pathByNextConfig(x) === pathName);
};

export const checkPathIsInPublic = (pathName: string): boolean => {
  pathName = pathByNextConfig(pathName);
  if (publicPaths.some((x) => pathByNextConfig(x) === pathName)) return true;
  if (
    securedPaths?.some((x) => pathByNextConfig(x) === pathName) ||
    securedPathsPrefix?.some((x) => {
      if (x === '/') return true;
      const endPortion = pathName.slice(pathByNextConfig(x).length - (nextConfig.trailingSlash ? 1 : 0));
      return pathName.startsWith(pathByNextConfig(x)) && (endPortion.startsWith('/') || endPortion.length < 1);
    })
  ) {
    return false;
  }

  return true;
};
