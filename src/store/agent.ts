import { request } from 'graphql-request';
import { getHeader } from '../graphcms-queries/header';
import { IHeader } from '../layout/model/header';
import { IGraphCMSDefinedObject } from '../layout/model/graphCMSResponse';

const ENDPOINT = "https://api-ap-northeast-1.graphcms.com/v2/ckekrlhbx6hai01w30kg1g3d2/master";

const graphCMS = {
    header: (): Promise<IHeader> => request<IGraphCMSDefinedObject>(ENDPOINT, getHeader).then(r => r.headers[0])
}

export default graphCMS;