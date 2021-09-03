import React, {useEffect, useMemo, useState} from 'react';
import Spinner from "../components/UI/Spinner/Spinner";

const withLoader = (WrappedComponent, axios) => {
    return (props) => {
        const [load, setLoad] = useState(false);

        const interceptorsRequestId = useMemo(() => {
            return axios.interceptors.request.use(
                req => {
                    setLoad(true);
                    return req;
                }
            );
        }, []);

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(interceptorsRequestId);
            }
        }, [interceptorsRequestId]);

        return (
            <>
                {load
                    ?
                    <Spinner />
                    :
                    null
                }
                <WrappedComponent {...props} />
            </>
        ) ;
    };
};

export default withLoader;