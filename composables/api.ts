import {ofetch} from "ofetch";

enum APIMETHODSTYPES {
    GET = "get",
    DELETE = "delete",
    POST = "post",
    PUT = "put",
    PATCH = "patch",
}

type ApiRequestData = {
    url: string;
    method: APIMETHODSTYPES;
    body?: Record<string, unknown>;
    queryParams?: Record<string, any>;
    element?: HTMLElement;
};

const useApi = (data: ApiRequestData) =>
    new Promise((resolve, reject) => {
        let url = data.url.startsWith("http")
            ? data.url
            : `https://stage.achareh.ir/api/karfarmas/${data.url}`;

        if (data.method === APIMETHODSTYPES.GET && data.queryParams) {
            const queryString = new URLSearchParams(data.queryParams).toString();
            if (queryString) {
                url += `?${queryString}`;
            }
        }

        ofetch(url, {
            method: data.method,
            body: data.body,
            headers: {Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4"},
        })
            .then((res: unknown) => {
                resolve(res);
            })
            .catch((err) => reject(err.data));
    });

export const api = {
    get: (url: string, queryParams?: Record<string, unknown>, element?: HTMLElement) =>
        useApi({url, method: APIMETHODSTYPES.GET, queryParams, element}),
    delete: (url: string, body?: Record<string, unknown>, element?: HTMLElement) =>
        useApi({url, method: APIMETHODSTYPES.DELETE, body, element}),
    post: (url: string, body: Record<string, unknown>, element?: HTMLElement) =>
        useApi({url, method: APIMETHODSTYPES.POST, body, element}),
    put: (url: string, body: Record<string, unknown>, element?: HTMLElement) =>
        useApi({url, method: APIMETHODSTYPES.PUT, body, element}),
    patch: (url: string, body: Record<string, unknown>, element?: HTMLElement) =>
        useApi({url, method: APIMETHODSTYPES.PATCH, body, element}),
};
