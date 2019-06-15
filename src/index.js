import AccountData from "./AccountData.js";
import ContractData from "./ContractData.js";
import ContractForm from "./ContractForm.js";
import LoadingContainer from "./LoadingContainer.js";
import AccountDataNew from "./new-context-api/AccountData";
import ContractDataNew from "./new-context-api/ContractData";
import ContractFormNew from "./new-context-api/ContractForm";
import LoadingContainerNew from "./new-context-api/LoadingContainer";
import AccountDataHooks from "./hooks/AccountData";
import ContractDataHooks from "./hooks/ContractData";
import ContractFormHooks from "./hooks/ContractForm";

const newContextComponents = {
  AccountData: AccountDataNew,
  ContractData: ContractDataNew,
  ContractForm: ContractFormNew,
  LoadingContainer: LoadingContainerNew
};

const hookedComponents = {
  AccountData: AccountDataHooks,
  ContractData: ContractDataHooks,
  ContractForm: ContractFormHooks,
};

export {
  AccountData,
  ContractData,
  ContractForm,
  LoadingContainer,
  newContextComponents,
  hookedComponents,
};
