import express from 'express';
import gtgRoute from './gtgRoute';
import departmentRoute from './departmentRoute';
import employeeRoute from './employeeRoute';
import accessTokenRoute from './accessTokenRoute';

const apiRoutes = express.Router();
apiRoutes.use('/departments', departmentRoute);
apiRoutes.use('/employees', employeeRoute);

export { gtgRoute, accessTokenRoute, apiRoutes };
