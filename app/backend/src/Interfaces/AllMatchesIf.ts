import { MatchesIf } from './MatchesIf';

interface AllMatchesIf {
  getListOfMatches(): Promise<MatchesIf[]>
}

export default AllMatchesIf;
