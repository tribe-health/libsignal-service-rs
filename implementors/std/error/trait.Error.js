(function() {var implementors = {};
implementors["libsignal_protocol"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_protocol/error/enum.SignalProtocolError.html\" title=\"enum libsignal_protocol::error::SignalProtocolError\">SignalProtocolError</a>","synthetic":false,"types":["libsignal_protocol::error::SignalProtocolError"]}];
implementors["libsignal_service"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/enum.ProfileManagerError.html\" title=\"enum libsignal_service::ProfileManagerError\">ProfileManagerError</a>","synthetic":false,"types":["libsignal_service::account_manager::ProfileManagerError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/attachment_cipher/enum.AttachmentCipherError.html\" title=\"enum libsignal_service::attachment_cipher::AttachmentCipherError\">AttachmentCipherError</a>","synthetic":false,"types":["libsignal_service::attachment_cipher::AttachmentCipherError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/profile_cipher/enum.ProfileCipherError.html\" title=\"enum libsignal_service::profile_cipher::ProfileCipherError\">ProfileCipherError</a>","synthetic":false,"types":["libsignal_service::profile_cipher::ProfileCipherError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/sealed_session_cipher/enum.SealedSessionError.html\" title=\"enum libsignal_service::sealed_session_cipher::SealedSessionError\">SealedSessionError</a>","synthetic":false,"types":["libsignal_service::sealed_session_cipher::SealedSessionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/sealed_session_cipher/enum.MacError.html\" title=\"enum libsignal_service::sealed_session_cipher::MacError\">MacError</a>","synthetic":false,"types":["libsignal_service::sealed_session_cipher::MacError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/envelope/enum.EnvelopeParseError.html\" title=\"enum libsignal_service::envelope::EnvelopeParseError\">EnvelopeParseError</a>","synthetic":false,"types":["libsignal_service::envelope::EnvelopeParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/groups_v2/enum.CredentialsCacheError.html\" title=\"enum libsignal_service::groups_v2::CredentialsCacheError\">CredentialsCacheError</a>","synthetic":false,"types":["libsignal_service::groups_v2::manager::CredentialsCacheError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/groups_v2/enum.GroupDecryptionError.html\" title=\"enum libsignal_service::groups_v2::GroupDecryptionError\">GroupDecryptionError</a>","synthetic":false,"types":["libsignal_service::groups_v2::operations::GroupDecryptionError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/models/enum.ParseContactError.html\" title=\"enum libsignal_service::models::ParseContactError\">ParseContactError</a>","synthetic":false,"types":["libsignal_service::models::ParseContactError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/provisioning/enum.ProvisioningError.html\" title=\"enum libsignal_service::provisioning::ProvisioningError\">ProvisioningError</a>","synthetic":false,"types":["libsignal_service::provisioning::ProvisioningError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/push_service/enum.ServiceError.html\" title=\"enum libsignal_service::push_service::ServiceError\">ServiceError</a>","synthetic":false,"types":["libsignal_service::push_service::ServiceError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/receiver/enum.MessageReceiverError.html\" title=\"enum libsignal_service::receiver::MessageReceiverError\">MessageReceiverError</a>","synthetic":false,"types":["libsignal_service::receiver::MessageReceiverError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/sender/enum.AttachmentUploadError.html\" title=\"enum libsignal_service::sender::AttachmentUploadError\">AttachmentUploadError</a>","synthetic":false,"types":["libsignal_service::sender::AttachmentUploadError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/sender/enum.MessageSenderError.html\" title=\"enum libsignal_service::sender::MessageSenderError\">MessageSenderError</a>","synthetic":false,"types":["libsignal_service::sender::MessageSenderError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.58.0/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> for <a class=\"enum\" href=\"libsignal_service/service_address/enum.ParseServiceAddressError.html\" title=\"enum libsignal_service::service_address::ParseServiceAddressError\">ParseServiceAddressError</a>","synthetic":false,"types":["libsignal_service::service_address::ParseServiceAddressError"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()